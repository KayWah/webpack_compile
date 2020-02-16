const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');

const path = require("path");

module.exports = {
  //打包⼊⼝⽂件
  // 单文件
  // entry: "./src/index.js",
  // 多入口文件
  entry: {
    index: './src/index.js',
    style: './src/less/style.less',
    ts: './src/ts/index.ts',
    es: './src/js/index.js'
  },
  // output: "./build", //输出结构
  output: {
    //输出路径,必须是绝对路径 /build/
    path: path.resolve(__dirname, "./build"),
    //输出文件的名称
    // filename: "[name].[hash:8].bundle.js"
    filename: "[name].bundle.js"
  },
  mode: "development", //打包环境
  // 开启监听模式
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, './src/'),
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      //loader模块处理
      //当webpack遇到不认识的模块，我们需要用正确loader来处理
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};