const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    entry: {
        main: './server.ts'
    },

    target: "node",

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            // exclude: /node_modules/,
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
        })
    ],

    output: {
        publicPath: '/',
        filename: 'bundle.js', // 打包后文件名
        path: path.resolve(__dirname, 'dist') // 输出路径(必须为绝对路径)
    },


}