const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
    extra: './extra.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['stage-0'],
          },
        }],
      },
    ],
  },
}
