var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');//h5模板插件

module.exports = {
    //入口
    entry:'./main.js',
    //出口
    output:{
        filename:'main.bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new htmlWebpackPlugin({template: './index.html'})
    ]
}