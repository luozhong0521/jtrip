// 打包/运行配置文件
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/workspace/jtrip/dist/',
    productionSourceMap: true
  },
  dev: {
    assetsPublicPath: '/',
    port: 80,
    proxyTable: {}
  }
}
