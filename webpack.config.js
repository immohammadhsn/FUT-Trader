const headers = require("./tampermonkey-header");
const { UserscriptPlugin } = require("webpack-userscript");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "fut-auto-buyer.user.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    hashFunction: "xxhash64",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  plugins: [
    new UserscriptPlugin({
      ...headers,
      headers: headers.headers,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
