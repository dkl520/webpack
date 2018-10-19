module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }]
    },
    externals: {
           // require('data') is external and available
    //  on the global var data
        'data': 'data'
    }
}