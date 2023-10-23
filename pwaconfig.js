const pwaConfig = {
  registerType: "autoUpdate",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,jpg,png,svg,webmanifest}"],
  },
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: "3-D Portfolio",
    short_name: "3-D Portfolio",
    description: "Mahesh's 3-D Portfolio",
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

export default pwaConfig;
