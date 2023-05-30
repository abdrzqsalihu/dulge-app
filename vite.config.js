import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // The port number you want to use
    // host: 'your-desired-url', // The URL you want to use
  },
})

