const path = require('path');
var webpack = require('webpack');

var apiHost;

var setupApi = function(){
  switch(process.env.NODE_ENV) {
    case 'production':
      apiHost = '"http://eng40api.travisbumgarner.com"';
      break;
    case 'development':
      apiHost = '"http://localhost:8000"';
      break;
  }
};

setupApi();

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({__API__: apiHost})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
