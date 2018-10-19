module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    // 模块化扩展的时候的配置
    rules: [{
      test: /\.js$/,
      // 匹配的文件
      exclude: /node_modules/,
      // 去除node_modules  在配置的时候
      use: {
        loader: 'babel-loader',
        // 运用的是babel进行回退
        options: {
          presets: ['es2015', 'env'],
          plugins: ["transform-vue-jsx"]
        }
      }
    }],

  }
};