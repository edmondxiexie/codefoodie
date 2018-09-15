const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src//index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDirectory)
  },

  devServer: {
    port: 8000,
    compress: true,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader' }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/index.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: false
    })
  ],

  mode: 'development',
  resolve: {}
};
