import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
  },
};
