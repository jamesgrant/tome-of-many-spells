const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
  entry: {
    front: './src/entry/front.js',
    worker: './src/entry/worker.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 128 * 1024,
  }
};
