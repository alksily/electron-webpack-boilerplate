const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: 'source-map',
    
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: '[name].[chunkhash].js'
    },
    
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
    
});
