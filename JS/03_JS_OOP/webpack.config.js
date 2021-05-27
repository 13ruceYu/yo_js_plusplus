const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index'],
      excludeChunks: ['node_modules']
    })
  ],
  optimization: {
    splitChunks: { chunks: "all" } // code splitting
  },
  devServer: {
    port: 8089,
    host: 'localhost',
    open: true
  }
}