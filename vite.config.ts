// import { fileURLToPath, URL } from "node:url"
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"
import path from "path"
// https//vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" }), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
