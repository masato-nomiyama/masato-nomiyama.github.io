// Copyright (C) 2018-Present Masato Nomiyama

const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.browser': JSON.stringify(true),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
