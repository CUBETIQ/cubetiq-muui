import * as path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "CUBETIQ MUUI",
      formats: ['es', 'umd'],
      fileName: (format) => `muui-vite.${format}.js`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(),dts({
insertTypesEntry: true
  })],
});
