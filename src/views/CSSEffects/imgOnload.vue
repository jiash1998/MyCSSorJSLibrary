<template>
  <div id="imgOnload">
    <div class="imgDiv">
      <div class="title">
        <div class="imgTit">
          <img class="img1" :src="load" />
        </div>
        <h1>This is a title</h1>
        <img class="img2" :src="load" />
        <img class="img2" :src="load" />
        <h1>123</h1>
      </div>
      <div class="content">
        <div v-for="(item, index) in customUrl" :key="index">
          <img :src="item" :class="'aximg' + index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import imgList from "../../JsUtil/css_js/imgList";
import * as Onload from "../../JsUtil/css_js/imgOnload";
export default {
  name: "imgOnload",
  data() {
    return {
      load: imgList.load,
      customUrl: []
    };
  },
  mounted() {
    /**
     * 用于函数预加载
     * @method dealNodeList
     * @param {String} nodename 节点名称, {String} vuename 页面名称
     *
     */
    let p = Onload.dealNodeList("img", "imgOnload");
    console.log(p);
    // this.test();
    // this.getImg();
  },
  methods: {
    getImg() {
      axios.get("http://118.31.12.146:8080/getAllCustom").then(res => {
        for (const i of res.data) {
          this.customUrl.push(i.url);
        }
        console.log(this.customUrl);
      });
    },

    mulp() {
      let a = 10,
        b = 10,
        c = undefined;
      return new Promise((resolve, reject) => {
        if (!c) {
          resolve((c = a + b));
        } else {
          reject("error");
        }
      });
    },
    async test() {
      console.log(await this.mulp());

      // this.mulp()
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/css_CSS/imgOnload.scss";
</style>