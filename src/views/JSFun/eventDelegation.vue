<template>
  <div id="eventDelegation">
    <!-- <div id="d1">1</div>
    <div id="d2">2</div>
    <div id="d3">3</div>
     <div id="d4">4</div>
    <div id="d5">5</div>
    <div id="d6">6</div>
    <div id="d7">7</div>
    <div id="d8">8</div>
    <div id="d9">9</div>
    <div id="d10">10</div>-->
  </div>
</template>

<script>
// import throttle from "../../JsUtil/throttle";
export default {
  name: "eventDelegation",
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  mounted() {
    let father = this.$qs("#eventDelegation");
    let div1 = this.$qs("#d1");
    let d4 = this.$qs("#d4");

    let count = document.getElementsByTagName("div");
    // console.log(count.length);
    this.init();
    window.addEventListener(
      "scroll",
      this.throttle(this.windowEvent, 500, 1000)
    );
    // this.windowEvent();
    // throttle(this.windowEvent, 500, 1000);
    // this.H5NewApi(this.$qs("#d1"));
    // console.log(div1,this.$qs("#d1"));
    this.H5NewApi(this.$qs("#d4"));
  },
  destroyed() {
    console.log("byb11");
  },
  methods: {
    $qs(name) {
      return document.querySelector(name);
    },
    realFunc() {
      console.log("Success");
    },
    throttle(func, wait, mustRun) {
      var timeout,
        startTime = new Date();

      return function () {
        var context = this,
          args = arguments,
          curTime = new Date();

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
          func.apply(context, args);
          startTime = curTime;
          // 没达到触发间隔，重新设定定时器
        } else {
          timeout = setTimeout(func, wait);
        }
      };
    },
    //基本信息
    calcScreen() {
      let clientH = document.documentElement.clientHeight;
      let scrollT = document.documentElement.scrollTop;
      return { clientH, scrollT };
    },
    getTop() {
      for (let i = 1; i <= 10; i++) {
        console.log(document.getElementById("d" + i).offsetTop);
      }
    },
    //监听滚动
    windowEvent() {
      let cont = this.calcScreen();
      console.log(cont.scrollT);
    },
    //H5 新api 监听交叉区
    H5NewApi(name) {
      let ob = new IntersectionObserver(this.callback, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      });

      ob.observe(name);
    },
    callback(entries) {
      console.log(entries[0].target);
      console.log(entries[0].intersectionRatio);
      if (
        entries[0].intersectionRatio > 0.25 &&
        entries[0].intersectionRatio < 0.5
      ) {
        console.log("start");
        this.addElement(0);
      }
    },
    //创建节点
    addElement(i) {
      let div0 = document.createElement("div");
      let father = this.$qs("#eventDelegation");

      div0.id = "d" + i;
      div0.innerHTML = i;
      div0.style.cssText = `width: 90%;
        height: 200px;
        border-radius: 8px;
        background-color: pink;
        margin: 10px auto;
        transition: 4s;`;
      father.appendChild(div0);
    },
    init() {
      for (let i = 1, len = this.list.length; i <= len; i++) {
        this.addElement(i);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#eventDelegation {
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
    height: 200px;
    border-radius: 8px;
    background-color: pink;
    margin: 10px auto;
    transition: 2s;
  }
}
</style>