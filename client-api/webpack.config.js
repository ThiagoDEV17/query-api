const path = require('path');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'dist');

const server = {
  entry: './src/server/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: buildPath,
  },
  target: 'node',
};

module.exports = [server];
