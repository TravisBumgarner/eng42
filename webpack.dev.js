const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: "./views",
    port: 3000,
    historyApiFallback: true,
  },
});