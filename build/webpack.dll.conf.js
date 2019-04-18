/**
 * @description: DLLPlugin 链式引用预编译三方库
 * @param {type} 
 * @return: 李长城
 */

const webpack = require("webpack")
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
      vendor: ['react', 'react-dom', 'react-router-dom', 'lodash']
  },
  resolve: {
    modules: [ // 优化模块查找路径
      resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ],
    mainFields: ["browser", "module", "main"]
  },
  output: {
      path: resolve('public'),
      library: '_dll_[name]',
      filename: 'dll_static/_dll_[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dll_static'], {
      root: resolve('public'),
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]', //和output.library中一致，值就是输出的manifest.json中的 name值
      path: path.join(__dirname, '../public/dll_static', '[name].manifest.json')
    })
  ]
}