<template>
  <div>
    <button @click="NodeApiGet">get接口</button>
    <button @click="NodeApiPost">post接口</button>
  </div>
</template>

<script>
import axios from "axios"; //axios
import qs from "querystring";
export default {
  methods: {
    //node接口测试
    NodeApiGet() {
      // axios.get("/getmodel").then(res => {
      //   console.log(res);
      // });
      axios.get("/getDB").then(res => {
        console.log(res.data);
      });
    },
    NodeApiPost() {
      axios
        .post("/postmodel", qs.stringify({ id: "123",name:"孙悟空",age:2000}), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>