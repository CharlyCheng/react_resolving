const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const resolve = (dir) => path.join(__dirname, '..', dir);
const manifest = require('../dist/dll/vendor.manifest')

module.exports = {
  entry: {
    app: './src/index.js',
    vendors: ['lodash']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.less', '.ts', '.tsx'],
    modules: [ // 优化模块查找路径
      resolve('src'),
      resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ],
    alias: {
      // 'react': resolve('node_modules/react/cjs/react.production.min.js')
    }
  },
  externals: {
    // 'react': resolve('node_modules/react/cjs/react.production.min.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash:16].js',
    library: '_dll_[name]',
    publicPath: '/'
  },
  // optimization: {
  //   minimize: true,
  //   runtimeChunk: {
  //     name: 'manifest'
  //   },
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 20000,
  //     //其他入口chunk引用的次数
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     //默认使用name + hash生成文件名
  //     name: true,
  //     automaticNameDelimiter: '~',
  //     //使用自定义缓存组
  //     cacheGroups: {
  //         //公共模块
  //         commons: {
  //           name: 'common',
  //           //缓存优先级设置
  //           priority: 10,
  //           //从入口chunk提取
  //           chunks: 'initial'
  //         },
  //         //提取第三方库
  //         vendors: {
  //             //符合条件的放入当前缓存组
  //             test: /[\\/]node_modules[\\/]/,
  //             name: "vendors",
  //             chunks: "all",
  //             priority: 20
  //         },
  //     }
  //   }
  // },
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: resolve('src'),
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.join(__dirname, '..'),
    //   exclude: ['dist/dll']
    // }),
    new HtmlWebpackPlugin({
      template: resolve('/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
        manifest
    }),
    new ParallelUglifyPlugin({
      workerCount: 3, //开启几个子进程去并发的执行压缩。默认是当前运行电脑的 CPU 核数减去1
      uglifyJS: {
          output: {
              beautify: false, //不需要格式化
              comments: false, //不保留注释
          },
          compress: {
              warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
              drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
              collapse_vars: true, // 内嵌定义了但是只用到一次的变量
              reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
          }
      }
    })
  ]
}