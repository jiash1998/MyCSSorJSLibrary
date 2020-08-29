<template>
  <div id="virtualList2">
    <div id="d1">1</div>
    <div id="d2">2</div>
    <div id="d3">3</div>
    <div id="d4">4</div>
    <div id="d5">5</div>
    <div id="d6">6</div>
  </div>
</template>

<script>
export default {
  name: "virtualList2",
  data() {
    return {
      scrollT: 0,
      clientH: 0,
    };
  },
  mounted() {
    // this.scrollT = document.documentElement.scrollTop;
    this.clientH = document.documentElement.clientHeight;
    // console.log( document.documentElement);
    // console.log(window.navigator.userAgent);
    window.addEventListener("scroll", () => {
      console.log(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollTop,
        document.documentElement.offsetHeight
      );
      //   if (
      //     document.documentElement.clientHeight +
      //       Math.round(document.documentElement.scrollTop) ==
      //       document.documentElement.offsetHeight ||
      //     document.documentElement.clientHeight +
      //       Math.round(document.documentElement.scrollTop) +
      //       1 ==
      //       document.documentElement.offsetHeight
      //   ) {
      //     console.log("true");
      //   }
      //   if (
      //     Math.round(document.documentElement.scrollTop) +
      //       document.documentElement.clientHeight ===
      //     document.body.scrollHeight
      //   ) {
      //     alert("到底了");
      //   }
      var a =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      var b =
        document.documentElement.scrollTop == 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;
      var c =
        document.documentElement.scrollTop == 0
          ? document.body.scrollHeight
          : document.documentElement.scrollHeight;
      //alert(document.body.clientHeight);
      //alert(document.documentElement.clientHeight);
      // alert(document.documentElement.scrollTop);
      //alert(document.documentElement.scrollHeight);
      //alert(document.body.scrollHeight);
      if (
        document.body.scrollTop == 0 &&
        document.documentElement.scrollTop == 0
      ) {
        alert("到达顶端");
      }
      if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
        alert("到达底部");
      }
    });
  },
  methods: {
    //节流
    throttle(fn, wait, mustRun) {
      let timeout,
        startTime = new Date();
      return function () {
        let context = this,
          args = arguments,
          curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
          fn.apply(context, args);
          startTime = curTime;
        } else {
          // 没达到触发间隔，重新设定定时器
          timeout = setTimeout(fn, wait);
        }
      };
    },
    //兼容事件
    compatiableEvent(element, type, handler) {
      if (element.addEventListener) {
      } else if (element.attachEvent) {
      }
    },
    //事件委托
    eventEntrust() {},
  },
};
</script>

<style lang="scss" scoped>
#virtualList2 {
  width: 100%;
  #d1,
  #d2,
  #d3,
  #d4,
  #d5,
  #d6,
  #d7,
  #d8,
  #d9,
  #d10 {
    width: 90%;
    height: 150px;
    border-radius: 8px;
    background-color: pink;
    margin: 5px auto;
    transition: 2s;
  }
}
</style>