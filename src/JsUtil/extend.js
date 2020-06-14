//这里不能这样引用 import Vue from "vue";
import Vue from "vue/dist/vue.js";
import extendVue from "../components/extendVue";
//关闭生产环境提示
Vue.config.productionTip = false;
// var Profile = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// export default Profile;

const HelloExtend = Vue.extend(extendVue);
// export default HelloExtend;
// 使用这个方法调用hello组件
function Hello(options = {}) {
  if (typeof options === "string") {
    options = {
      name: options,
    };
  }

  // 实例化子组件，然后获取到DOM结构并挂载到body上
  const helloInstence = new HelloExtend({ data: options });
  //手动地挂载一个未挂载的实例。
  helloInstence.vm = helloInstence.$mount();
  console.log(helloInstence.vm);
  document.body.appendChild(helloInstence.vm.$el);
}
export default Hello;
