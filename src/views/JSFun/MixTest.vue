<template>
  <div id="MixTest">{{mix1}}- </div>
</template>

<script>
import { mixins } from "../../JsUtil/mixins.js";
import  MyExtends from "../../JsUtil/extends.js";

export default {
  name: "MixTest",
  mixins: [mixins],
  extends:MyExtends,
  created() {
      this.logData();
  },
//   data() {
//       return {
//           mix1:2
//       }
//   },
//   methods: {
//       logData(){
//           console.log("asd");
//       }
//   },
  
};
</script>

<style lang="scss" scoped>
</style>