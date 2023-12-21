import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/build/content_scripts",
  build: {
    outDir: `${path.resolve(__dirname, "../build/content_scripts")}/`,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: () => "[name].js",
      },
    },
  },
});
