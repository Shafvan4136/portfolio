import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path must match your GitHub repo name exactly (case-sensitive).
// Repo: https://github.com/Shafvan4136/portfolio  →  base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
