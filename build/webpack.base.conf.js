const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    // 'react': 'React'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    // publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      template: resolve('/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}