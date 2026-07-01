import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // =========================================================================
    // GitHub Pages Deployment Configuration:
    // To deploy to https://<USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/
    // replace the base value below with: base: '/YOUR-REPOSITORY-NAME/'
    // By default, it uses VITE_BASE_PATH environment variable or root '/'
    // =========================================================================
    base: process.env.VITE_BASE_PATH || '/', // Replace with base: '/YOUR-REPOSITORY-NAME/' if hardcoding
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
