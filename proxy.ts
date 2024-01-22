export const proxy = (isDevelopment: boolean) => {
  if (!isDevelopment) return {}

  return {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  }
}
