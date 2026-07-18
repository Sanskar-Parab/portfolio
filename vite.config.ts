import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Change this from '/Myportfolio/' to '/'
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});