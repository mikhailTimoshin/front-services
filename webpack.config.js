const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: '/node_modules',
      }
    ]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/')
    },
    extensions: ['.ts', '.tsx']
  },
  output: {
    filename: 'frame.js',
    path: path.resolve(__dirname, 'dist')
  }
}
