// vite.config.js
// Update the favicon reference in the index.html file
module.exports = {
  // ... rest of the config ...
  plugins: [
    react(),
    {
      name: 'vite:plugin-index-html',
      configureWebpack: {
        plugins: [
          {
            use: 'vite-plugin-index-html',
            options: {
              favicon: 'public/favicon.ico',
              faviconSvg: 'public/favicon.svg',
            },
          },
        ],
      },
    },
  ],
};