const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const path =  require('path')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        host: 'localhost',
        hot: true,
        port: 3006
    }
})