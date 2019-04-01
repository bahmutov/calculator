module.exports = {
  // https://webpack.js.org/configuration/node/
  // avoid winston logger problem
  node: { fs: 'empty' },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env', 'babel-preset-react'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
