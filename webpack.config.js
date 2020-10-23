const path = require('path')
module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.ts?$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'frame.js',
    path: path.resolve(__dirname, 'dist')
  }
}
