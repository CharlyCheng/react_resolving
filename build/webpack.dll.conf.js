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
      library: '_dll_[name]',
      filename: 'dll/_dll_[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dll'], {
      root: resolve('public'),
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]', //和output.library中一致，值就是输出的manifest.json中的 name值
      path: path.join(__dirname, '../public/dll', '[name].manifest.json')
    })
  ]
}