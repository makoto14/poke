/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  mode: "development",
  output: {
    filename: "./app.js",
    publicPath: "/",
  },
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: ["web", "es5"],

  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        // トランスコンパイルの対象となるディレクトリを指定
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules", "@mui"),
          path.resolve(__dirname, "node_modules", "react-router"),
        ],
        // トランスコンパイルから除外するディレクトリを指定
        exclude: [
          path.resolve(__dirname, "node_modules", "@mui", "icons-material"),
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: [">0.2%", "not dead", "ie 11"],
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                ["@babel/preset-react"],
                ["@emotion/babel-preset-css-prop"],
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: "tsconfig.json",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
      publicPath: ["", "/**", "/**/*"],
      // publicPath: ["/main", "/sub"],
      watch: true,
      serveIndex: true,
    },
    watchFiles: {
      paths: ["src/**/*.tsx", "src/**/*.ts"],
      options: {
        usePolling: 1000,
      },
    },
    client: {
      logging: "info",
      progress: true,
      reconnect: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    port: 8081,
    open: ["/main/"],
    hot: true,
  },
};
