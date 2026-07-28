import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const PluginContext = createContext(null);

const createPluginRegistry = (plugins = []) => {
  const registry = {
    components: {},
    themeExtensions: [],
    hooks: {},
    utils: {},
    listeners: [],
    installed: [],
  };

  for (const plugin of plugins) {
    if (!plugin || !plugin.name || typeof plugin.install !== 'function') {
      console.warn('[ms-ui-kit] Skipping invalid plugin:', plugin);
      continue;
    }
    if (registry.installed.includes(plugin.name)) {
      console.warn(`[ms-ui-kit] Plugin "${plugin.name}" is already installed, skipping.`);
      continue;
    }

    const api = {
      registerComponent: (name, component) => {
        if (typeof name !== 'string' || !name) return;
        if (typeof component !== 'function' && typeof component !== 'object') return;
        registry.components[name] = component;
      },
      extendTheme: (extension) => {
        if (extension && typeof extension === 'object') {
          registry.themeExtensions.push(extension);
        }
      },
      registerHook: (name, hook) => {
        if (typeof name !== 'string' || !name) return;
        if (typeof hook !== 'function') return;
        registry.hooks[name] = hook;
      },
      registerUtil: (name, util) => {
        if (typeof name !== 'string' || !name) return;
        registry.utils[name] = util;
      },
      onEvent: (callback) => {
        if (typeof callback === 'function') {
          registry.listeners.push(callback);
        }
      },
    };

    try {
      plugin.install(api);
      registry.installed.push(plugin.name);
    } catch (err) {
      console.error(`[ms-ui-kit] Failed to install plugin "${plugin.name}":`, err);
    }
  }

  return registry;
};

export const PluginProvider = ({ plugins = [], children }) => {
  const [registry] = useState(() => createPluginRegistry(plugins));

  const getComponent = useCallback(
    (name) => registry.components[name] || null,
    [registry.components]
  );

  const getThemeExtensions = useCallback(
    () => registry.themeExtensions,
    [registry.themeExtensions]
  );

  const getHook = useCallback(
    (name) => registry.hooks[name] || null,
    [registry.hooks]
  );

  const getUtil = useCallback(
    (name) => registry.utils[name] || null,
    [registry.utils]
  );

  const emitEvent = useCallback(
    (eventName, data) => {
      for (const listener of registry.listeners) {
        try {
          listener(eventName, data);
        } catch (err) {
          console.error(`[ms-ui-kit] Event listener error for "${eventName}":`, err);
        }
      }
    },
    [registry.listeners]
  );

  const contextValue = useMemo(
    () => ({
      plugins: registry.installed,
      getComponent,
      getThemeExtensions,
      getHook,
      getUtil,
      emitEvent,
      components: registry.components,
      hooks: registry.hooks,
      utils: registry.utils,
    }),
    [registry, getComponent, getThemeExtensions, getHook, getUtil, emitEvent]
  );

  return (
    <PluginContext.Provider value={contextValue}>
      {children}
    </PluginContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlugins = () => {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error('usePlugins must be used within a PluginProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useComponent = (name) => {
  const { components } = usePlugins();
  return components[name] || null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePluginHook = (name) => {
  const { hooks } = usePlugins();
  return hooks[name] || null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePluginUtil = (name) => {
  const { utils } = usePlugins();
  return utils[name] || null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePluginTheme = () => {
  const { getThemeExtensions } = usePlugins();
  return useMemo(() => {
    const extensions = getThemeExtensions();
    if (extensions.length === 0) return {};
    return extensions.reduce((merged, ext) => ({
      ...merged,
      ...ext,
      colors: { ...merged.colors, ...ext.colors },
    }), {});
  }, [getThemeExtensions]);
};
