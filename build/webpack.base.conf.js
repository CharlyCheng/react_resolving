const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin= require('html-webpack-include-assets-plugin')
const resolve = (dir) => path.join(__dirname, '..', dir);
const HappyPack = require('happyPack')


module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.less', '.styl', '.ts', '.tsx'],
    modules: [ // 优化模块查找路径
      resolve('src'),
      resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
    ],
    alias: {
      '@src': resolve('src')
    }
  },
  externals: {
    // 'react': 'react',
    // 'react': resolve('node_modules/react/cjs/react.production.min.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash].js',
    // chunkFilename:'[name].[chunkhash].js',
    // library: '_dll_[name]',
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      //其他入口chunk引用的次数
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      //默认使用name + hash生成文件名
      name: true,
      automaticNameDelimiter: '~',
      //使用自定义缓存组
      cacheGroups: {
          //公共模块
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
          //提取第三方库
          vendors: {
              //符合条件的放入当前缓存组
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: -10
          },
      }
    }
  },
  module: {
    rules: [
      {
        include: path.resolve("node_modules", "lodash"),
        sideEffects: false
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        use: 'happypack/loader?id=babel'
      },
      {
        test: /\.ts|.tsx?$/,
        use: [
          {
          "loader": "ts-loader",
          }
        ],
        include: resolve('src')
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // { loader: 'postcss-loader', options: { parser: 'sugarss', exec: true } },
          'sass-loader', 
          { loader: 'less-loader', options: { javascriptEnabled: true }},
        ]
      },
      {
        test: /\.css$/,
        exclude: resolve('node_modules'),
        use:  [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          // MiniCssExtractPlugin.loader,
          'css-loader'
        ]
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash:8].css",
      // chunkFilename: "[id].css"
    }),

    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 引用动态链接库
    new webpack.DllReferencePlugin({
        // context: path.resolve(__dirname, '..'),
        manifest: require('../public/dll_static/vendor.manifest')
    }),
    // 文件动态添加到html中
    new AddAssetHtmlPlugin([{
      filepath: path.resolve(__dirname,'../public/dll_static/*.js'),
      outputPath: 'dll_static',
      publicPath: 'dll_static',
      includeSourcemap: false
    }]),
    new ParallelUglifyPlugin({
      // workerCount: 3, //开启几个子进程去并发的执行压缩。默认是当前运行电脑的 CPU 核数减去1
      cacheDir: path.resolve(__dirname,'../public/uglify-cache'),
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
    }),
    
    // 作用域提升(scope hoisting)
    // 由于 Scope Hoisting 需要分析出模块之间的依赖关系，因此源码必须采用 ES6 模块化语句，不然它将无法生效
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 开启happpack 多进程babel-loader
    new HappyPack({
      id: 'babel',
      //如何处理.js文件，和rules里的配置相同
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env'],
          "plugins": [
             // `style: true` 会加载 less 文件
          ]
        }
      }]
    })
  ]
}