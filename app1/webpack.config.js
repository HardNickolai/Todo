const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
        styles: path.resolve(__dirname, "src/styles/"),
        utils: path.resolve(__dirname, "src/utils/"),
        api: path.resolve(__dirname, "src/api/"),
        components: path.resolve(__dirname, "src/components/"),
        views: path.resolve(__dirname, "src/views/"),
        constants: path.resolve(__dirname, "src/constants/"),
        reduxStore: path.resolve(__dirname, "src/reduxStore/")
    },
    extensions: [".ts", ".js", ".json", ".tsx"],
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
