const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),  // assign the root catalog
  mode: 'development',
  entry: {  // entry points
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },  // result boundle destination 
  resolve: {
    extensions: ['.js', '.json', '.png'],  // can write only filename without the file extension
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),  // useful for shortening
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: {
    splitChunks: {  // prevent of duplicate code 
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'  // allows use file as a template 
    }),
    new CleanWebpackPlugin(),  // cleans old unuseful files 
    new CopyWebpackPlugin({  // copy static files to dist
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ],
    }),
  ],
  module: {
    rules: [  // loaders 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  }
}