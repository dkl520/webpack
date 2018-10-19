module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js',
    bundle3: "./main3.js"
  },
  // demo1是字符串 这里是一个输出对象..
  output: {
    filename: '[name].js'
  }

};