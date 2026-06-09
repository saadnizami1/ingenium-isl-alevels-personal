import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      optipng: { optimizationLevel: 5 },
    }),
  ],
})
