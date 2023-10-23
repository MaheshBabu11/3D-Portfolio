import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ['**/*.{js,css,html,jpg,png}']
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['./src/assetc/logo.svg', './src/assets/pwa-192x192.png', './src/assets/pwa-512x512.png'],
      manifest: {
        name: '3-D Portfolio',
        short_name: '3-D Portfolio',
        description: 'Mahesh\'s 3-D Portfolio',
        theme_color: '#ffffff',
        icons: [
          {
            src: './src/assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './src/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './src/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
  ],
  base: "/3D-Portfolio/",
});
