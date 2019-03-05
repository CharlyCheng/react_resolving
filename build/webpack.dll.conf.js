const webpack = require("webpack")
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
      vendor: ['react', 'react-dom', 'lodash']
  },
  output: {
      path: resolve('dist'),
      library: '_dll_[name]',
      filename: 'dll/[name].dll.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]', //和output.library中一致，值就是输出的manifest.json中的 name值
      path: path.join(__dirname, '../dist/dll', '[name].manifest.json')
    })
  ]
}