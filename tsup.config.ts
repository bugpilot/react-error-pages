import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  format: ["esm"],
  metafile: false,
  minify: true,
  sourcemap: false,
  treeshake: true,
});
