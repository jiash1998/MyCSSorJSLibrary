import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"; //axios
import VueAxios from "vue-axios"; //axios
//引入基本模板
let echarts = require('echarts/lib/echarts');
//引入饼图组件
require('echarts/lib/chart/pie');

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.prototype.$echarts = echarts;
// axios.defaults.baseURL = "http://api.douban.com/v2/";
// axios.defaults.baseURL = '/api';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
