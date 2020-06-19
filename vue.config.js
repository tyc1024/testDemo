const path = require('path')
const webpack = require('webpack')
// const createThemeColorReplacerPlugin = require('./config/plugin.config')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const assetsCDN = {
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
  ]
}
// vue.config.js
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ProvidePlugin({
        'window.jQuery': 'jquery',
      })
    ],
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  },
  outputDir: 'd:\\front-build-release\\dist',
  chainWebpack: config => {
    console.log(process.env.NODE_ENV)
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })

    // if prod is on
    // assets require on cdn
    config.plugin('html').tap(args => {
      args[0].cdn = assetsCDN
      return args
    })
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
    }
  },

  devServer: {
    // development server port 8000
    port: 8000,
    open: true,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    //proxy: {
    //  '/api': {
    //    target: URL,
    //    secure: false,
    //    changeOrigin: true,
    //    pathRewrite: {
    //      '/api': '/api'
    //    }
    //  }
    //}
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: true,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
  console.log('VUE_APP_PREVIEW', true)
  // add `ThemeColorReplacer` plugin to webpack plugins
  // vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
}

module.exports = vueConfig