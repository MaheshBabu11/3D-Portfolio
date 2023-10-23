import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { logo } from "./src/assets/logo.svg";
import {pwa512} from "./pwa-512x512.png";
import {pwa192} from "./pwa-192x192.png";

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
      includeAssets: [logo, pwa192, pwa512],
      manifest: {
        name: '3-D Portfolio',
        short_name: '3-D Portfolio',
        description: 'Mahesh\'s 3-D Portfolio',
        theme_color: '#ffffff',
        icons: [
          {
            src: pwa192,
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: pwa512,
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: pwa192,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: pwa512,
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
