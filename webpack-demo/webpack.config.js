
// nodejs 内置模块
var path = require('path');

module.exports = {
    // 配置入口文件
    entry: './src/main.js',
    output: {
        // 输出路径
        path: path.resolve(__dirname, "./dist"),
        //输出文件
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development' // 设置mode

};

