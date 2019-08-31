const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const outputDirectory = "public";

const config = {
  entry: ["@babel/polyfill", "./src/client/client.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    publicPath: "/",
    // filename: "[chunkhash].js",
    filename: "bundle.js"
    // chunkFilename: "[chunkhash].js"
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // },
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
};

module.exports = merge(baseConfig, config);
