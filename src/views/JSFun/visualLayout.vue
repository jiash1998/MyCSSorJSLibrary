<template>
  <!-- 
  动态编辑css，并编译：scopedCss
  代码文本高亮：highlight.js，vue-hignlightjs
  剪切板：vue-clipboard2
  -->
  <div id="visualLayout">
    <el-form :model="testForm">
      <el-form-item label="测试框">
        <el-input v-model="testForm.input1" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="test3">点击生成div</el-button>
    <el-button type="primary" @click="getCode">格式化代码</el-button>
    <el-button type="primary" @click="testConfig">在线编辑</el-button>
    <pre v-highlightjs>
    <!-- <code class="css" contenteditable>                
      [CSS]
      {{text}}
      </code> -->
      <code class="css" v-html="text">                
      </code>
    </pre>
    <div id="layout" ref="preview">
      <p>1213</p>
    </div>
    <div class="testDiv">123</div>
  </div>
</template>

<script>
import scopedCss from "scopedcss";
import pretty from "pretty";
export default {
  name: "visualLayout",
  data() {
    return {
      testForm: {
        input1: ""
      },
      text: "p{color:red;}"
    };
  },
  methods: {
    test() {
      let con = this.testForm.input1;
      //   console.log(eval(`<div>123</div>`));
    },
    testConfig() {
      // 1. 创建<iframe>元素
      var iframe = document.createElement("iframe");
      // 2. 将CSS，HTML字符串转换为Blob对象
      var blob = new Blob([this.text]);
      // 3. 使用URL.createObjectURL()方法将...
      iframe.src = URL.createObjectURL(blob);
      document.body.appendChild(iframe);
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
    getCode() {
      //       let a = `<!DOCTYPE html> <html lang="en"> <head>
      // <meta charset="UTF-8"> <title>Home</title>
      // </head> <body> <h1>This is content. </h1></body> </html>`;
      let a = "<style lang='scss' scoped>p{color:blue;}</style>";
      // let a = "p{color:blue;}";
      //先使用pretty格式化，再用正则给剥离出来；
      this.text = pretty(a);
      console.log(this.text);
      this.text = this.text.replace(/style/g, "");
      console.log(this.text);
      // return a;
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
      console.log(this.text);
      const cssText = document.createTextNode(this.text);
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

.testDiv {
  width: 80%;
  height: 150px;
  border-radius: 5px;
  background-color: pink;
  // box-sizing: border-box;
  box-sizing: content-box;
  // transition: .1s;

  &:hover {
    border: 2px dashed #3498db;
  }
}
</style>