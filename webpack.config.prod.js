const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webPackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production";

module.exports = {
  mode: "production",
  target: "web",
  devtool: "source-map",
  entry: "./src/index",
  //server side rendering configuraiton
  // ssrIndexJs: resolveApp("src/index.server.js"),
  // ssrBuild: resolveApp("dist"),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },

  plugins: [
    //disply bundle stats
    new webPackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // favicon: "src/favicon.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        // loaders run from the bottom up, so..
        //the most bottom one will separate different
        //https://github.com/cssnano/cssnano
        //second, create a sourcemap for debugging
        //the first one will create separate css files
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("cssnano")],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
