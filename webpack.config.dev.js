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
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/resource'
    }, {
      test: /\.css$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, "css-loader"]
    }, {
      test: /\.s[ac]ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader // options: {
        //     publicPath: (resourcePath, context) => {
        //         return path.relative(path.dirname(resourcePath), context);
        //     } // ,
        //     // sourceMap: true,
        // }

      }, "css-loader", 'sass-loader']
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    }]
  },
  devServer: {
    open: true,
    watchFiles: ['./src/sass/*', './src/pug/main/*', './src/pug/menu/*']
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css'
  }), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, './src/assets/img'),
      to: path.resolve(__dirname, 'dist/images')
    }, {
      from: path.resolve(__dirname, './src/assets/favicon'),
      to: path.resolve(__dirname, 'dist/favicon')
    }, {
      from: path.resolve(__dirname, './src/index.js'),
      to: path.resolve(__dirname, 'dist/index.js')
    }]
  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pug/main/index.pug'),
    filename: 'index.html'
  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/pug/menu/index.pug'),
    filename: 'menu.html'
  })]
};