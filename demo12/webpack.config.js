var webpack = require('webpack');

module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
    ]
  },
  plugins: [
    // CommonsChunkPlugin主要是用来提取第三方库和公共模块，避免首屏加载的bundle文件或者按需加载的bundle文件体积过大，
    // 从而导致加载时间过长，着实是优化的一把利器。
    // 会把前面的文件包的公共模块提取出来比如说Vue,.s 避免重复打包多次单独分离出第三方库、自定义公共模块、webpack运行文件

    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // (the commons chunk name)

      filename: "commons.js",
      // (the filename of the commons chunk)
    })
  ]
}
