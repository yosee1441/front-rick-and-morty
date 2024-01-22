import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { proxy } from './proxy'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development'

  return {
    plugins: [react()],
    server: {
      port: 3001,
      open: true,
      ...proxy(isDevelopment),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
  }
})
