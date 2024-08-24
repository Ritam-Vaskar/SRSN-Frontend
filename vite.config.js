import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Add the module name(s) that should be externalized during the build
      external: ['your-external-module'], // Replace with the actual module name
    },
  },
});
