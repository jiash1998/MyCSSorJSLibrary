<template>
  <div class="visualLayout2" ref="visualLayout2">
    <div class="body1" ref="body1" @mousemove="move1" @mouseup="leave">
      <div class="demo1" ref="demo1" @mousedown="drag1">1</div>
      <div class="demo2">2</div>
      <el-button type="primary" id="elBtn" ref="elBtn1" @click="elDown">123</el-button>
    </div>
    <div class="display"></div>
  </div>
</template>

<script>
export default {
  name: "visualLayout2",
  data() {
    return {
      a: document.createElement("div")
    };
  },
  mounted() {
    // console.log(event.pageX);
    console.log(a);
    var a = 1;
  },
  methods: {
    //按下
    drag1() {
      console.log(this.$refs.demo1);
      console.log(this.$refs.body1.clientHeight);
      console.log(this.$refs.body1.clientWidth);
      let offsetL = this.$refs.demo1.offsetLeft;
      let offsetT = this.$refs.demo1.offsetTop;
      // console.log(this.$refs.demo1.offsetLeft);
      // console.log(this.$refs.demo1.offsetTop);
      // console.log(event.pageX);
      console.log(this.$refs.body1);
      this.a.setAttribute("class", "createNode");
      this.a.style.cssText = `width:200px;height:100px;background-color:red;transition:.1s;`;
      this.a.style.cssText += `position:absolute;left:${offsetL}px;top:${offsetT}px`;
      this.$refs.body1.appendChild(this.a);
    },
    elDown() {
      console.log(document.querySelector("#elBtn"));
      console.log(this.$refs.elBtn1);
    },
    //松开
    leave() {
      // console.log(this.a.className);
      if (this.a.className) {
        this.$refs.body1.removeChild(this.a);
        this.a.setAttribute("class", "");
      }
    },
    //移动
    move1() {
      // console.log(event.pageX);
      this.a.style.cssText += `left:${event.pageX}px;top:${event.pageY}px`;
      // this.$refs.demo1.style.cssText = `position:absolute;left:${event.pageX};top:${event.pageY}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/js_CSS/visualLayout2.scss";
</style>