const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/app.component.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-syntax-dynamic-import"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        // Splitting npm modules as a seperate file
        vendor: {
          name: "vendor",
          chunks: "all",
          test: /node_modules/,
          priority: 2
        },

        // Splitting commonly used imports into separate chunk
        common: {
          name: "common",
          priority: 1,
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
          chunks: "async"
        }
      }
    }
  },
  plugins: [
    new CopyPlugin([
      { from: './index.html' }
    ]),
  ],
  devServer: {
    historyApiFallback: true
  }
};
