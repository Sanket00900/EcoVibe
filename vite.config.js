import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: { "process.env": process.env },
  plugins: [react()],
  alias: {
    find: /^react-mapbox-gl/,
    replacement: "react-mapbox-gl/lib",
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
