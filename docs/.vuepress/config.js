const sidebar = require('./config/sidebar')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  title: 'Element Ui Pro',
  port: 4000,
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '组件', link: '/component/' },
      { text: '设计指南', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [''],
      '/component/': sidebar.componentSideBar
    }
  },
  chainWebpack: (config, isServer) => {
      /**
   * 菜单icon处理为svg-sprite
   */
    config.module
      .rule('svg')
      .exclude
      .add(resolve('../../src/assets/icons'))
      .end()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('../../src/assets/icons')) // 处理目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'elp-icon-[name]'
      })
  }
}