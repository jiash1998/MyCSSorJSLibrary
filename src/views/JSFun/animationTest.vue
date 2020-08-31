<template>
  <div id="animationTest">
    <!-- setInterval -->
    <div id="myDiv1" style="width: 0;height: 20px;background-color:#2980b9;line-height: 20px;">0%</div>
    <button id="btn1">run</button>
    <!-- setTimeout -->
    <div id="myDiv2" style="width: 0;height: 20px;background-color:#27ae60;line-height: 20px;">0%</div>
    <button id="btn2">run</button>
    <!-- requestAnimationFrame -->
    <div id="myDiv3" style="width: 0;height: 20px;background-color:#d35400;line-height: 20px;">0%</div>
    <button id="btn3">run</button>
    <div id="myDiv4" style="width: 0;height: 20px;background-color:pink;line-height: 20px;">0%</div>
  </div>
</template>

<script>
export default {
  name: "animationTest",
  data() {
    return {
      timer1: 0,
      timer2: 0,
      timer3: 0,
      //   that: this,
      nodeList: [],
    };
  },
  mounted() {
    this.intervalFun();
    this.timeoutFun();
    this.requestAnimationFrameFun();

    var myDiv3 = document.getElementById("myDiv1");
    this.nodeList.push();
    window.addEventListener(
      "load",
      () => {
        this.fun1();
        // this.fun2();
      },
      false
    );
    // console.log(window.requestAnimationFrame);
    // console.log(window.webkitRequestAnimationFrame);
    // console.log(window.mozRequestAnimationFrame);
  },
  methods: {
    fun1() {
      let time = 0;
      let myDiv = document.getElementById("myDiv3");

      if (parseInt(myDiv.style.width) < 500) {
        myDiv.style.width = parseInt(myDiv.style.width) + 10 + "px";
        myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + "%";
        window.requestAnimationFrame(this.fun1);
      }
    },

    intervalFun() {
      var myDiv = document.getElementById("myDiv1");
      var btn = document.getElementById("btn1");
      btn.onclick = function () {
        clearInterval(this.timer1);
        myDiv.style.width = "0";
        this.timer1 = setInterval(function () {
          if (parseInt(myDiv.style.width) < 500) {
            console.log("1");
            myDiv.style.width = parseInt(myDiv.style.width) + 2 + "px";
            myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + "%";
          } else {
            clearInterval(this.timer1);
          }
        }, 16);
      };
    },

    timeoutFun() {
      var myDiv = document.getElementById("myDiv2");
      var btn = document.getElementById("btn2");
      btn.onclick = function () {
        clearTimeout(this.timer2);
        myDiv.style.width = "0";
        // console.log(this); btn

        this.timer2 = setTimeout(function fn() {
          if (parseInt(myDiv.style.width) < 500) {
            // console.log(this); window
            myDiv.style.width = parseInt(myDiv.style.width) + 10 + "px";
            myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + "%";
            this.timer2 = setTimeout(fn, 16);
            console.log(this.timer2);
          } else {
            clearTimeout(this.timer2);
          }
        }, 16);
      };
    },

    requestAnimationFrameFun() {
      var myDiv = document.getElementById("myDiv3");
      var btn = document.getElementById("btn3");
      let _self = this;

      btn.onclick = function () {
        this.timer3 = window.requestAnimationFrame(function fn() {
          if (parseInt(myDiv.style.width) < 500) {
            myDiv.style.width = parseInt(myDiv.style.width) + 10 + "px";
            myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + "%";
            _self.timer3 = window.requestAnimationFrame(fn);
          }
        });
      };
    },

    //callback
    // fn() {
    //   var myDiv = document.getElementById("myDiv3");
    //   var btn = document.getElementById("btn3");
    //   let _self = this.that;
    //   if (parseInt(myDiv.style.width) < 500) {
    //     console.log("3");
    //     myDiv.style.width = parseInt(myDiv.style.width) + 10 + "px";
    //     myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + "%";
    //     _self.timer3 = requestAnimationFrame(this.fn);
    //   } else {
    //     cancelAnimationFrame(_self.timer3);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>