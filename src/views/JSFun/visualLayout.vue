<template>
  <div id="visualLayout">
    <el-form :model="testForm">
      <el-form-item label="测试框">
        <el-input v-model="testForm.input1" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="test3">点击生成div</el-button>
    <div id="layout" ref="preview">
        <p>123</p>
    </div>
  </div>
</template>

<script>
import scopedCss from "scopedcss";
export default {
  name: "visualLayout",
  data() {
    return {
      testForm: {
        input1: ""
      }
    };
  },
  methods: {
    test() {
      let con = this.testForm.input1;
      //   console.log(eval(`<div>123</div>`));
    },
    test2() {
      // 1. 创建<iframe>元素
      var iframe = document.createElement("iframe");
      // 2. 将CSS，HTML字符串转换为Blob对象
      var blob = new Blob(["<div>123</div>"], {
        type: "text/html"
      });
      // 3. 使用URL.createObjectURL()方法将...
      iframe.src = URL.createObjectURL(blob);
      document.body.appendChild(iframe);
    },
    test3() {
      let style = document.getElementById("custom-layout");
      if (!style) {
        style = document.createElement("style");
        style.id = "custom-layout";
        style.setAttribute("scoped", "");
        style.type = "text/css";
        this.$refs.preview.appendChild(style);
      }
      const cssText = document.createTextNode("p{color:red;font-size:2em;}");
      style.innerHTML = "";
      style.appendChild(cssText);
      // 动态添加scoped style
      scopedCss.applyTo(this.$refs.preview);
    }
  }
};
</script>

<style lang="scss" scoped>
body style {
  display: block;
  padding: 0.6em 0.8em;
  border: 1px dashed #ccc;
  background-color: #f5f5f5;
  color: red;
  font-family: Monaco, monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>