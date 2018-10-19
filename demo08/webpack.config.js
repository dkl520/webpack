// import HtmlwebpackPlugin from "html-webpack-plugin";
// import openBrowserWebpackPlugin from 'open-browser-webpack-plugin';
// 请求webpack.config.js文件中只能用require 不支持 import
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: "./main",
    output: {
        filename: "bundle.js"
    },

    plugins: [
        new HtmlwebpackPlugin({
            title: "webpack poluginsssss",
            filename: "index.html",
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8090'
        })
        //  'http://localhost:8090'改路径必须与原生路径相同 否则无效

    ]

}