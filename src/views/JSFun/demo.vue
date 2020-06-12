<template>
  <div id="demo">
    <form>
      <input type="text" v-model="form.inputInfo" />
      <p>{{url}}</p>
      <button @click="postVal">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      url: "www.baidu.com/",
      form: {
        inputInfo: ""
      }
    };
  },
  watch: {
    "form.inputInfo": {
      handler(newVal, oldVal) {
        this.url = "www.baidu.com/" + newVal;
      }
    }
  },
  methods: {
    postVal() {
      console.log(this.url);
      //处理axios请求
    }
  }
};
</script>