import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@/components': resolve(__dirname, './components'),
      '@/lib': resolve(__dirname, './lib'),
      '@/hooks': resolve(__dirname, './hooks'),
      '@/pages': resolve(__dirname, './pages'),
      '@/app': resolve(__dirname, './app'),
      '@/config': resolve(__dirname, './config'),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api-images': {
        target: 'https://img.freepik.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-images/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(
      process.env.npm_package_version
    ),
  },
});
