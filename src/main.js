import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"; //axios
import VueAxios from "vue-axios"; //axios
//引入svg
import "./icons";
//element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入excal操作
// import Blob from '../src/JsUtil/excalOpr/Blob';
// import Export2Excel from "../src/JsUtil/excalOpr/Export2Excel";

import pretty from "pretty";

// highlight.js代码高亮指令
// import Highlight from "../src/JsUtil/highlight";
// Vue.use(Highlight);
import VueHighlightJS from "vue-highlightjs";
// import "highlight.js/styles/monokai-sublime.css";
// import "highlight.js/styles/arduino-light.css";
import "highlight.js/styles/atom-one-light.css";

// 为代码文本提供高亮、缩进
Vue.use(VueHighlightJS);
// 为代码文本格式化
Vue.prototype.$prettyDom = pretty;

//引入基本模板
let echarts = require("echarts/lib/echarts");
//引入饼图组件
require("echarts/lib/chart/pie");

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.prototype.$echarts = echarts;
// axios.defaults.baseURL = "http://api.douban.com/v2/";
// axios.defaults.baseURL = '/api';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
