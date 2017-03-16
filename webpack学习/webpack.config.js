var webpack = require('webpack')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    // entry: __dirname + '/app/main.js',
    entry: {
        bundle1: __dirname + '/app/main.js',
        bundle2: __dirname + '/app/main1.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        chunkFilename: "[name].[chunkhash].js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader?modules'
        }, {
            test: /\.png|jpg/,
            loader: 'url-loader?limit=8192'
        }]
    },
    devServer: {
        contentBase: './public',
        port: '8080',
        inline: true,
        // color: true,
        historyApiFallback: true
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'webpack-demo',
            filename: 'baomax.html',
            template: __dirname + '/public/index.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'baobao.html',
            templateContent: 'lalalalla',
            inject: false
        }),
        new OpenBrowserWebpackPlugin({
            url: 'http://127.0.0.1:8080/baomax.html'
        }),
        new ExtractTextPlugin({ filename: './app/greeting.css', allChunks: true })
    ]
}