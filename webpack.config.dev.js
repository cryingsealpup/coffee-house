"use strict";

var path = require('path');

var miniCss = require('mini-css-extract-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/resource'
    }, {
      test: /\.(s*)ass$/,
      use: ["style-loader", "css-loader", {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }]
  },
  devServer: {
    open: true,
    watchFiles: ['./src/sass/*', './src/pug/main/*', './src/pug/menu/*']
  },
  plugins: [new MiniCssExtractPlugin(), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, './src/assets/img'),
      to: path.resolve(__dirname, 'dist/images')
    }, {
      from: path.resolve(__dirname, './src/assets/favicon'),
      to: path.resolve(__dirname, 'dist/favicon')
    }]
  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pug/main/index.pug'),
    filename: 'index.html'
  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pug/menu/index.pug'),
    filename: 'menu.html'
  })]
};