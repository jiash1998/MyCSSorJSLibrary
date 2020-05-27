// //SVG
// module.exports = {
//   module: {
//     // 配置不同模块处理规则
//     rules: [
//       {
//         test: /\.svg$/,
//         loader: "svg-sprite-loader",
//         include: [resolve("src/icons")],
//         options: {
//           symbolId: "icon-[name]",
//         },
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: "url-loader",
//         exclude: [resolve("src/icons")],
//         options: {
//           limit: 10000,
//           name: utils.assetsPath("img/[name].[hash:7].[ext]"),
//         },
//       },
//     ],
//   },
// };
