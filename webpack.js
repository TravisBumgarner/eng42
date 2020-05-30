const path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.[jt]s[x]$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    output: {
        filename: '[name]-[hash].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            SharedComponents: path.resolve(__dirname, 'src/sharedComponents/'),
            Theme: path.resolve(__dirname, 'src/theme.js'),
            Content: path.resolve(__dirname, 'src/content')
        }
    },
    devServer: {
        contentBase: './public',
        port: 3000,
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({ __API__: '"https://storage.googleapis.com/eng40/media/"' }),
        new HtmlWebpackPlugin({
            template: './src/index.template.ejs',
            favicon: "./src/favicon.png",
            inject: 'body'
        })
    ]
}
