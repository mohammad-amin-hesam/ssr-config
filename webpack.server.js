const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const outputDirectory = "dist";

const config = {
  target: "node",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    publicPath: "/",
    filename: "bundle.js"
  },
  externals: [webpackNodeExternals()],
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
};

module.exports = merge(baseConfig, config);
