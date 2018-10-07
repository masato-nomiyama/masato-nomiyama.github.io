// Copyright (C) 2018-Present Masato Nomiyama

const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(
      [
        'dist/*.*',
        'dist/img/*.*',
      ],
      { root: path.resolve(__dirname) },
    ),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: { removeAll: true },
      },
    }),
  ],
})
