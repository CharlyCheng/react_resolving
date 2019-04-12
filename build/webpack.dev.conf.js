const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackIncludeAssetsPlugin= require('html-webpack-include-assets-plugin')
const path =  require('path')
const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: resolve('dist'),
        host: 'localhost',
        hot: true,
        port: 3006
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})