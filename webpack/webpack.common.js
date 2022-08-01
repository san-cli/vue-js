const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
   entry: path.resolve(__dirname, "..", "./src/main.js"),
   output: {
      path: path.resolve(__dirname, "..", "./dist"),
      filename: "bundle.[name]-[hash].js",
   },
   plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "..", "./public/index.html"),
      }),
   ],
   module: {
      rules: [
         { test: /.vue$/, use: "vue-loader" },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.m?js$/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
            type: "asset/inline",
         },
      ],
   },
}
