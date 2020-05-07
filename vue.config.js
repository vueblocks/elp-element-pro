const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const isProduct = process.env.NODE_ENV === 'production'

const setChainWebpack = config => {
  // 修改默认目录简写
  config.resolve.alias
    .set('@', path.resolve(__dirname, 'app'))
    .set('@lib', path.resolve(__dirname, 'src'))
  // 添加对 app 目录的支持
  config.module
    .rule('js')
    .include
    .add('/app')
    .end()
    .use('babel')
    .loader('babel-loader')
    .end()
  /**
   * 图片
   */
  config.module
    .rule('images')
    .use('url-loader')
    .loader('url-loader')
    .tap(options => Object.assign(options, { limit: 20480 }))
  /**
   * 菜单icon处理为svg-sprite
   */
  config.module
    .rule('svg')
    .exclude
    .add(resolve('src/assets/icons'))
    .end()
  config.module
    .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include
    .add(resolve('src/assets/icons')) // 处理目录
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'elp-icon-[name]'
    })
}

const setConfigureWebpack = config => {
  const externalLibs = ['axios']
  // 将 vue 设置为外部依赖
  let externals = [
    function (context, request, callback) {
      for (const lib of externalLibs) {
        const reg = new RegExp(`^${lib}`)
        if (reg.test(request)) {
          return callback(null, lib)
        }
      }
      callback()
    }
  ]
  return isProduct ? {
    externals
  } : {}
}

module.exports = {
  pages: {
    index: 'app/main.js'
  },
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: false
  },
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config)
}
