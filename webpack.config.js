const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/client/components/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  mode: devMode ? 'development' : 'production',
};
