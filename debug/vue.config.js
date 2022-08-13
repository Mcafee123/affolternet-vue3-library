const path = require(`path`);
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // don't load vue twice
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve(`./node_modules/vue`),
      },
    },
  },
  // don't load viue twice
  css: { 
    extract: false
  }
});

