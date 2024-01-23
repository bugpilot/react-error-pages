import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  sourcemap: false,
  format: ["esm"],
  minify: true,
  treeshake: true,
  metafile: true,
  external: ["react", "react-dom"],
});
