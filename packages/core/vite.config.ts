import path from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { createVuePlugin as vue2 } from "vite-plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "demo-core",
      formats: ["es"],
      fileName: "main",
    },
  },
  plugins: [vue2(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
