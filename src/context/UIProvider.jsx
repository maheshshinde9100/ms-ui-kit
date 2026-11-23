import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { PluginProvider } from './PluginContext';
import { ToastProvider } from '../components';

const UIProvider = ({ plugins = [], children }) => {
  return (
    <PluginProvider plugins={plugins}>
      <ThemeProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </ThemeProvider>
    </PluginProvider>
  );
};

export default UIProvider;
