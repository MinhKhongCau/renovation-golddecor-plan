import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'qmcloud.io.vn',
      'gold.qmcloud.io.vn',
      'silver.qmcloud.io.vn',
      'scooper.qmcloud.io.vn',
    ],
    host: true
  }
})