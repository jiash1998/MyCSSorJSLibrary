const path = require("path");
const resolve = (dir) => path.join(__dirname, ".", dir);

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // assetsDir:'assets',
  // indexPath:"enter.html",
  // pages: {
  //   index: {
  //     entry: "src/pages/index/index.js",
  //     template: "src/pages/index/index.html",
  //     filename: "index.html",
  //   },
  //   view1: {
  //     entry: "src/pages/view1/view1.js",
  //     template: "src/pages/view1/view1.html",
  //     filename: "view1.html",
  //   },
  //   view2: {
  //     entry: "src/pages/view2/view2.js",
  //     template: "src/pages/view2/view2.html",
  //     filename: "view2.html",
  //   },
  // },
  
  css:{
    
  },
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/": {
        target: "http://localhost:3000", //3000是node服务的端口
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  //use svg
  chainWebpack(config) {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  // css: {
  //   requireModuleExtension: false,
  //   loaderOptions: {
  //     css: {
  //       modules: {
  //         localIdentName: "[local]_[hash:base64:8]",
  //       },
  //       localsConvention: "camelCaseOnly",
  //     },
  //   },
  // },
  // module: {
  //   rules: [
  //     // ... 其它规则省略
  //     {
  //       test: /\.css$/,
  //       use: [
  //         "vue-style-loader",
  //         {
  //           loader: "css-loader",
  //           options: {
  //             // 开启 CSS Modules
  //             modules: true,
  //             // 自定义生成的类名
  //             localIdentName: "[local]_[hash:base64:8]",
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
