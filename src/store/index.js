import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value1: "value",
  },
  mutations: {
    updateVal(state, payload) {
      return (state.value1 = payload.payload);
    },
    // updateVal(state) {
    //   return (state.value1 = "payload");
    // },
  },
  actions: {
    actionA(context, {name, sex1}) {
      console.log(name, sex1);
      // context.commit("updateVal", state);
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(state);
      //     context.commit("updateVal", state);
      //     resolve("success");
      //   }, 2000);
      // });
    },
  },
  modules: {},
});
