import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/My-moneva',
  optimizeDeps: {
    exclude: ['lightningcss', 'fdir'],
  },
  ssr: {
    noExternal: ['lightningcss'],
  },
  build: {
    rollupOptions: {
      external: [
        'lightningcss',
        'fdir',
        'fs',
        'path',
        'module',
        'child_process',
      ],
    },
  },
});
