const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const WebpackPrettierPlugin = require("webpack-prettier-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const esLintPlugin = (isDev) =>
  isDev ? [] : [new ESLintPlugin({ extensions: ["ts", "js", "tsx", "jsx"] })];

const prettierPlugin = (isDev) =>
  isDev
    ? [
        new WebpackPrettierPlugin({
          extensions: [".js", ".ts", ".tsx", ".jsx"],
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          encoding: "utf-8",
        }),
      ]
    : [];

// const config = ({ develop }) => ({
//   mode: develop ? "development" : "production",
//   devtool: develop ? "inline-source-map" : "source-map",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[contenthash].js",
//     assetModuleFilename: "assets/[hash][ext]",
//     publicPath: "/",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js"],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[name].[contenthash].css",
//     }),
//     new CleanWebpackPlugin({
//       cleanStaleWebpackAssets: false,
//     }),
//     // new CopyPlugin({
//     //   patterns: [
//     //     {from: './public'}
//     //   ]
//     // }),
//     ...esLintPlugin(develop),
//     ...prettierPlugin(develop),
//   ],
// });

const clientConfig = ({ develop }) => ({
  mode: develop ? "development" : "production",
  devtool: develop ? "inline-source-map" : "source-map",

  name: "client",
  entry: {
    main: "./client/src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext]",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {from: './public'}
    //   ]
    // }),
    ...esLintPlugin(develop),
    ...prettierPlugin(develop),
  ],
});

const serverConfig = ({ develop }) => ({
  mode: develop ? "development" : "production",
  devtool: develop ? "inline-source-map" : "source-map",

  name: "server",
  target: "node",
  entry: {
    main: "./server/src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext]",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    ...esLintPlugin(develop),
    ...prettierPlugin(develop),
  ],
});

module.exports = [clientConfig, serverConfig];
