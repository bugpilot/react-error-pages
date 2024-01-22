// eslint-disable @typescript-eslint/no-var-requires

// postcss.config.js
module.exports = {
  plugins: [require("tailwindcss")(), require("autoprefixer")()],
};
