/*
  Este archivo maneja la configuracion de webpack,
  webpack lee aca como compilar el proyecto.
  Podemos agregar directivas de que archivos empaquetar,
  cuales no y como queremos que los empaquete.
*/
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const templatePath = path.resolve(__dirname, 'src', 'template.html');
const outputPath = path.resolve(__dirname, 'build');
const entryPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
  entry: entryPath,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          }
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.css', '.html'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: templatePath,
    }),
  ],
  devtool: 'source-map',
};
