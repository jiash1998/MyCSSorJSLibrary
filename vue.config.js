const path = require("path");
const resolve = (dir) => path.join(__dirname, ".", dir);

module.exports = {
  devServer: {
    port: 8080,
    open: false,
    // proxy: {
    //   "/": {
    //     target: "http://118.31.12.146:8080",
    //     ws: true,
    //     changeOrigin: true //创建一个虚拟服务器，
    //     // pathRewrite: {
    //     //   "^/api": "" //通配符
    //     // }
    //   }
    // }
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
};
