const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getProdRemoteEntryUrl } = require("./webpack.utils");

module.exports = {
  mode: "production",
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      title: "Hello Webpack bundled JavaScript Project ",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      app1RemoteEntry: getProdRemoteEntryUrl("https://mfe-webpack-app1.vercel.app"),
      app2RemoteEntry: getProdRemoteEntryUrl("https://mfe-webpack-app2.vercel.app"),
    }),
  ],
  devtool: "source-map",
};
