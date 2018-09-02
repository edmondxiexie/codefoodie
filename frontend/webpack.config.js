const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src//index.js",
  output: {
    filename: "build.[hash:8].js",

    // Absolute path
    path: path.resolve("./build")
  },

  devServer: {
    contentBase: "./build/",
    port: 8000,
    compress: true,
    open: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }, { loader: "sass-loader" }]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "css/index.css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["./build"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Food Code",
      hash: true
    })
  ],

  mode: "development",
  resolve: {}
};
