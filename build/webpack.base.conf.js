const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  entry: {
    app: './src/index.js',
    vendors: ['lodash']
  },
  resolve: {
    extensions: ['.js', '.jsx', ".json"]
  },
  externals: {
    // 'react': 'React'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[hash:16].js',
    publicPath: '/'
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      template: resolve('/index.html'),
      filename: 'index.html'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'initial',
      minSize: 0,
      minChunks: 1,
      
      cacheGroups: {
        vendor: {
          test: /react|lodash/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
}