// Copyright (C) 2018-Present Masato Nomiyama

require('babel-polyfill')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    'main': [
      'babel-polyfill',
      path.resolve(__dirname, 'src', 'js', 'main.jsx'),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'es2016',
              'es2017',
              'stage-3',
              'react',
            ],
          },
        }],
      },
      {
        test: /\.png/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img/',
            name: '[name].[ext]',
          },
        }],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: { sourceMap: true },
            }],
          }),
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true },
              },
              {
                loader: 'stylus-loader',
                options: { sourceMap: true },
              },
            ],
          }),
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'src'),
        from: 'index.html',
        to: '',
      },
      {
        context: path.resolve(__dirname, 'src'),
        from: 'favicon.ico',
        to: '',
      },
      {
        context: path.resolve(__dirname, 'src'),
        from: 'CNAME',
        to: '',
      },
    ]),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
}
