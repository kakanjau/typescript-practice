var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'jquery/dist/jquery'
    ],
    ts: ['ts/basic-types', 'ts/test']
  },
  output: {
    filename: '[name].js',
    path: './dest'
  },
  module: {
    preLoaders: [
       {test: /\.ts$/, exclude: /(node_modules)/, loader: 'tslint'}
    ],
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(eot(\?.*)?|woff(\?.*)?|ttf(\?.*)?|svg(\?.*)?|woff2(\?.*)?)$/, loader: "file-loader" },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.ts$/, exclude: /(node_modules)/, loader: 'babel-loader!ts-loader'}
    ]
  },
  tslint: {
      emitErrors: false,
      failOnHint: false
  },
  plugins: [
    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", "window.jQuery": "jquery"}),
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    new HtmlWebpackPlugin({
      template: path.resolve('app', 'index.html'),
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.ts'],
    modulesDirectories: ['node_modules', 'app']
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8888,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true
    },
    contentBase: './app'
  }
}