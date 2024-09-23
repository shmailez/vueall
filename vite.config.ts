import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  

  plugins: [
    vue(),
    VitePWA({
      srcDir: "/vueall",
      filename: "sw.ts",
      registerType: 'autoUpdate',
      // injectRegister: 'auto',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      strategies: "injectManifest",
      injectRegister: false,
      manifest: false,
      injectManifest: {
        injectionPoint: undefined,
      }
    }),
    
  ],
  base: '/vueall/'
})
