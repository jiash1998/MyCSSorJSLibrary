<template>
  <div id="imgOnload">
    <div class="imgDiv">
      <img class="img1" :src="load" />
      <img class="img2" :src="load" />
      <img class="img3" :src="load" />
      <img class="img4" :src="load" />
    </div>
  </div>
</template>

<script>
import imgList from "../../JsUtil/css_js/imgList";
import { imgonload } from "../../JsUtil/css_js/imgOnload";
export default {
  name: "imgOnload",
  data() {
    return {
      load: imgList.load,
      img1: imgList.img1,
      img2: imgList.img2,
      img3: imgList.img3,
      img4: imgList.img4
    };
  },
  mounted() {
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let img3 = document.querySelector(".img3");

    imgonload(img1,this.img2);
    imgonload(img2,this.img3);
    imgonload(img3,this.img4);

  },
  methods: {
    init() {
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/css_CSS/imgOnload.scss";
</style>