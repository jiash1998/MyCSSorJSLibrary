<template>
  <div id="MixTest">
    {{name}}
    <el-button type="primary" @click="logData">button</el-button>
    <div id="extendEg"></div>
  </div>
</template>

<script>
import { mixins } from "../../JsUtil/mixins.js";
import MyExtends from "../../JsUtil/extends.js";
import MyExtend from "../../JsUtil/extend.js";

// const eg = new MyExtend().$mount();
export default {
  name: "MixTest",
  extends: MyExtends,
  mixins: [mixins],

  // data() {
  //   return {
  //     name:"MixTest"
  //   }
  // },
  mounted() {
    // let divid = document.querySelector("#extendEg");
    // divid.appendChild(eg.$el);
  },
  created() {
    // this.logData();
    console.log("MixTest");
  },

  //   data() {
  //       return {
  //           mix1:2
  //       }
  //   },
  methods: {
    logData() {
      console.log("MixTest");
      MyExtend("你好");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>