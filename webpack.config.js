const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // reference to .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
