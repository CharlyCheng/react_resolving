/*
 * @Author: 李长城
 * @Description: charlycheng
 * @Date: 2019-08-13 18:31:04
 * @LastEditTime: 2019-08-13 18:31:04
 */
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
  output: {
      path: resolve('public'),
      library: '_dll_[name]_[hash]',
      filename: 'dll_static/_dll_[name]_[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dll_static'], {
      root: resolve('public'),
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]_[hash]', //和output.library中一致，值就是输出的manifest.json中的 name值
      path: path.join(__dirname, '../public/dll_static', '[name].manifest.json')
    })
  ]
}