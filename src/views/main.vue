<template>
  <div id="main1">
    <div class="body">
      <div class="tabber"></div>
      <div class="con">
        <div class="left">
          <h2 contenteditable="true">主页1</h2>
          <button @click="test1(vm)">函数防抖{{num1}}</button>
          <button @click="test2(vm)">函数节流{{num2}}</button>
          <button @click="settime">定时器返回值</button>
          <!-- <input type="text" v-model="value" @keydown="hangleChange" /> -->
          <router-link to="/main/btnEffects" tag="button">伪类按钮</router-link>
          <router-link to="/btnSocialShare" tag="button">设计分享按钮</router-link>
          <router-link to="/positionTest" tag="button">定位练习</router-link>
          <router-link to="/conventionLayout" tag="button">常规布局</router-link>
          <router-link to="/heightTest" tag="button">高度自适应</router-link>
          <router-link to="/mediaTest" tag="button">媒体查询</router-link>
          <router-link to="/sortFun" tag="button">排序算法</router-link>
          <router-link to="/searchInput" tag="button">搜索框</router-link>
          <br />
          <a href="#">登录</a>
          <a href="#">注册</a>
          <br />
          <i class="icon_menu"></i>
        </div>
        <div class="right">
          <router-view />
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <h1>123123</h1>
          <i class="icon_menu"></i>
        </div>
      </div>
      <!-- <div class="footer"></div> -->
    </div>
  </div>
</template>

<script>
//地理分析图像库
import * as turf from "@turf/turf";
import { debounce } from "../debounce.js";
import { throttle } from "../throttle.js";
export default {
  name: "main1",
  data() {
    return {
      value: "",
      vm: this,
      num1: 0,
      num2: 0
    };
  },
  mounted() {
    var features = turf.featureCollection([
      turf.point([118.32455, 32.28246]),
      turf.point([118.323763, 32.282665]),
      turf.point([118.323622, 32.282344]),
      turf.point([118.324242, 32.282074]),
      turf.point([118.324271, 32.282284]),
      //
      turf.point([118.32304, 32.280778]),
      turf.point([118.319923, 32.274207]),
      turf.point([118.316527, 32.260624])
      // turf.point([118.324271, 32.282284]),
      // turf.point([118.324271, 32.282284]),
      // turf.point([118.324271, 32.282284]),
    ]);

    // var center = turf.center(features);
    // console.log(center);
    // this.get();
  },
  methods: {
    test1: debounce(
      vm => {
        vm.num1++;
      },
      2000,
      true
    ),
    // test1: debounce(vm => {
    //   vm.num++;
    //   console.log(vm);
    //   console.log(this);
    // }, 1000)

    // test1: debounce(function(e) {
    //   this.num++;
    // }, 1000)
    test2: throttle(
      vm => {
        vm.num2++;
      },
      1000,
      2
    ),
    settime() {
      var time = setTimeout(() => {
        alert("定时器启动");
      }, 1000);
      //定时器返回值或许是随机的
      console.log(this.settime);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>