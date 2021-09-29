const path = require("path");
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getDevRemoteEntryUrl } = require("./webpack.utils");

module.exports = {
  mode: 'development',
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      title: "Hello Webpack bundled JavaScript Project",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      app1RemoteEntry: getDevRemoteEntryUrl(3001),
      app2RemoteEntry: getDevRemoteEntryUrl(3002),
    })
  ],
  devtool: 'eval-source-map',
};