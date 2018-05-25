var webpack = require("webpack");
var path = require('path')


module.exports = {
    entry: './index.browser.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        declaration: false
                    }
                }
            }],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}