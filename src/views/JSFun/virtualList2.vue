<template>
  <div id="virtualList2">
    <div id="d1" v-for="(item,index) in divLen" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "virtualList2",
  data() {
    return {
      divLen: ["a1", "a2", "a3", "a4", "a5", "a6"],
    };
  },
  mounted() {
    // console.log(
    //   "clientHeight:",
    //   window.innerHeight,
    //   document.body.clientHeight,
    //   document.documentElement.clientHeight,
    //   "scrollTop:",
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   "scrollHeight:",
    //   document.body.scrollHeight,
    //   document.documentElement.scrollHeight,
    //   document.body.offsetHeight,
    //   document.documentElement.offsetHeight
    // );
    window.addEventListener("scroll", () => {
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
      if (
        document.body.scrollTop == 0 &&
        document.documentElement.scrollTop == 0
      ) {
        console.log("top");
      }
      if (a + Math.floor(b) == c || a + Math.ceil(b) == c) {
        console.log("end");
        for (let i = 0; i < 10; i++) {
          this.divLen.push(i);
        }
      }
    });
  },
  methods: {
    //添加新节点,不行这种方法
    createNewEle() {
      let node = document.createElement("div");
      let father = document.querySelector("#virtualList2");

      // node.style.cssText += ` width: 90%;
      //   height: 150px;
      //   border-radius: 8px;
      //   background-color: pink;
      //   margin: 0px auto;
      //   transition: 2s;`;
      node.setAttribute("class", "addNew");

      father.appendChild(node);
    },
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
    margin: 0px auto;
    transition: 2s;
  }

  .addNew {
    width: 90%;
    height: 150px;
    border-radius: 8px;
    background-color: pink;
    margin: 0px auto;
    transition: 2s;
  }
}
</style>