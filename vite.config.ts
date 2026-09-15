import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: false,
        allowedHosts: true,
      },
      plugins: [react(), tailwindcss()],
      base: '/',
      build: {
        sourcemap: true,
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('lucide-react')) {
                  return 'vendor-icons';
                }
                if (
                  id.includes('/react/') ||
                  id.includes('/react-dom/') ||
                  id.includes('/react-router/') ||
                  id.includes('/react-router-dom/')
                ) {
                  return 'vendor-react';
                }
              }
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
