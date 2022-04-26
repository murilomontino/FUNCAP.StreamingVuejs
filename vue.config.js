const webpack = require("webpack")
const path = require("path")

const dir = path.join(__dirname.replace("streaming-mapa-cultural", "server"), "views", "Home")

module.exports = {

  outputDir: path.resolve(dir),
  publicPath: process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_BASE_URL
    : "/",

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.common.js"
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
}
