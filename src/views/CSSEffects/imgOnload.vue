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
        <img class="img3" :src="load" />
        <img class="img2" :src="load" />
        <img class="img2" :src="load" />
        <img class="img3" :src="load" />
      </div>
    </div>
  </div>
</template>

<script>
import imgList from "../../JsUtil/css_js/imgList";
import * as Onload from "../../JsUtil/css_js/imgOnload";
export default {
  name: "imgOnload",
  data() {
    return {
      load: imgList.load
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
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss">
@import "../../assets/css/css_CSS/imgOnload.scss";
</style>