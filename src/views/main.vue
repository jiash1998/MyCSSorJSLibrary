<template>
  <div id="main1">
    <div class="body">
      <div class="tabber">
        <h2>My CSS/JS Library</h2>
      </div>
      <div class="con">
        <div class="left">
          <p>JS</p>
          <router-link to="/algorithmJob" tag="button">算法作业</router-link>
          <button @click="test1(vm)">函数防抖{{num1}}</button>
          <button @click="test2(vm)">函数节流{{num2}}</button>
          <button @click="settime">定时器返回值</button>
          <router-link to="/sortFun" tag="button">排序算法</router-link>
          <router-link to="/NodeApi" tag="button">node接口测试</router-link>
          <router-link to="/echartsTest" tag="button">Echarts饼图测试</router-link>
          <router-link to="/excalopr" tag="button">表格操作</router-link>
          <router-link to="/deepClone" tag="button">深度克隆</router-link>
          <router-link to="/EventLoop" tag="button">Event Loop</router-link>
          <router-link to="/funCurry" tag="button">函数柯里化</router-link>
          <router-link to="/mvvmUse" tag="button">MVVM 简单实现</router-link>
          <router-link to="/VueLifeCycle" tag="button">Vue 生命周期</router-link>
          <router-link to="/compComm" tag="button">Vue 组件通信</router-link>
          <router-link to="/demo" tag="button">Demo</router-link>
          <router-link to="/MixTest" tag="button">Vue 混入</router-link>
          <router-link to="/es6_Proxy" tag="button">ES6 Proxy</router-link>
          <!-- <br />
          <a href="#">登录</a>
          <a href="#">注册</a>
          <br />-->
        </div>
        <div class="right">
          <p>CSS</p>
          <!-- <i class="icon_menu"></i> -->
          <router-link to="/btnEffects" tag="button">伪类按钮</router-link>
          <router-link to="/btnSocialShare" tag="button">设计分享按钮</router-link>
          <router-link to="/positionTest" tag="button">定位练习</router-link>
          <router-link to="/conventionLayout" tag="button">常规布局</router-link>
          <router-link to="/heightTest" tag="button">高度自适应</router-link>
          <router-link to="/mediaTest" tag="button">媒体查询</router-link>
          <router-link to="/searchInput" tag="button">悬浮搜索框</router-link>
          <router-link to="/offset" tag="button">offset</router-link>
          <router-link to="/scroll" tag="button">scroll</router-link>
          <router-link to="/client" tag="button">client And Browser</router-link>
          <router-link to="/imgOnload" tag="button">图片预加载</router-link>
          <router-link to="/skeletonScreen" tag="button">骨架屏</router-link>
          <router-link to="/skeletonMine" tag="button">骨架屏 Mine</router-link>
          <router-link to="/skeletonMineSec" tag="button">骨架屏 Mine 2</router-link>
          <router-link to="/suckTop" tag="button">吸顶</router-link>
          <router-link to="/svgTest" tag="button">svg文件引入</router-link>
          <router-link to="/css_Middle" tag="button">css middle question</router-link>
          <router-link to="/vueScoped#tag1" tag="button">vue Scoped</router-link>
          <router-link to="/cssModules" tag="button">css Modules</router-link>
          <router-link to="/ElemPagination" tag="button">ElementUI 分页</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//地理分析图像库
import axios from "axios"; //axios
import qs from "querystring";
import * as turf from "@turf/turf";
import { debounce } from "../JsUtil/debounce";
import { throttle } from "../JsUtil/throttle.js";
export default {
  name: "main1",
  data() {
    return {
      value: "",
      vm: this,
      num1: 0,
      num2: 0,
      index: 0,
      //compComm
      list:["a","b","c"],
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
  created() {
    // console.log(window.atob(this.$route.query.id));    
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