import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({ svgo: false })],
  base: '/',
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
