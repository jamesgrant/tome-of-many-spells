const path = require('path');

module.exports = {
  mode: 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
  performance: {
    hints: 'error',
    maxAssetSize: 64000,
  }
};
