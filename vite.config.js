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
    }),
  ],
  base: "/3D-Portfolio/",
});
