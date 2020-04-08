import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"; //axios
import VueAxios from "vue-axios"; //axios

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
// axios.defaults.baseURL = "http://api.douban.com/v2/";
// axios.defaults.baseURL = '/api';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
