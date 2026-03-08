import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for the src directory
    },
  },
  server: {
    allowedHosts: [
      'qmcloud.io.vn',
      'gold.qmcloud.io.vn',
      'silver.qmcloud.io.vn',
      'scooper.qmcloud.io.vn',
    ],
    host: true
  }
});
