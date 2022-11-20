import path from "path"
import { defineConfig } from "vite"
import antdvFix from "vite-plugin-antdv-fix"
import dts from "vite-plugin-dts"
import { createVuePlugin as vue2 } from "vite-plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      formats: ["es"],
      name: "demo-common",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [vue2(), dts(), antdvFix()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
