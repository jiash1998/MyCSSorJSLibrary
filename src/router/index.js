import Vue from "vue";
import VueRouter from "vue-router";
//伪类按钮
import main from "../views/main";

//CSS
import btnEffects from "../views/CSSEffects/btnEffects";
import conventionLayout from "../views/CSSEffects/conventionLayout";
import positionTest from "../views/CSSEffects/positionTest";
import heightTest from "../views/CSSEffects/heightTest";
import btnSocialShare from "../views/CSSEffects/btnSocialShare";
import mediaTest from "../views/CSSEffects/mediaTest";
import searchInput from "../views/CSSEffects/searchInput";
import offset from "../views/CSSEffects/offset";
import scroll from "../views/CSSEffects/scroll";
import client from "../views/CSSEffects/client";
import imgOnload from "../views/CSSEffects/imgOnload";
import skeletonScreen from "../views/CSSEffects/skeletonScreen";
import skeletonMine from "../views/CSSEffects/skeletonMine";
import suckTop from "../views/CSSEffects/suckTop";
import skeletonMineSec from "../views/CSSEffects/skeletonMineSec";
import svgTest from "../views/CSSEffects/svgTest";
import css_Middle from "../views/CSSEffects/css_Middle";
import vueScoped from "../views/CSSEffects/vueScoped";
import cssModules from "../views/CSSEffects/cssModules";

//JS
import sortFun from "../views/JSFun/sortFun";
import echartsTest from "../views/JSFun/echartsTest";
import excalopr from "../views/JSFun/excalopr";
import NodeApi from "../views/JSFun/NodeApi";
import deepClone from "../views/JSFun/deepClone";
import EventLoop from "../views/JSFun/EventLoop";
import funCurry from "../views/JSFun/funCurry";
import mvvmUse from "../views/JSFun/mvvmUse";
import algorithmJob from "../views/JSFun/algorithmJob";
import VueLifeCycle from "../views/JSFun/VueLifeCycle";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: main,
  },
  //CSS
  {
    path: "/btnEffects",
    name: "btnEffects",
    component: btnEffects,
  },
  {
    path: "/positionTest",
    name: "positionTest",
    component: positionTest,
  },
  {
    path: "/heightTest",
    name: "heightTest",
    component: heightTest,
  },
  {
    path: "/btnSocialShare",
    name: "btnSocialShare",
    component: btnSocialShare,
  },
  {
    path: "/conventionLayout",
    name: "conventionLayout",
    component: conventionLayout,
  },
  {
    path: "/mediaTest",
    name: "mediaTest",
    component: mediaTest,
  },
  {
    path: "/searchInput",
    name: "searchInput",
    component: searchInput,
  },
  {
    path: "/offset",
    name: "offset",
    component: offset,
  },
  {
    path: "/scroll",
    name: "scroll",
    component: scroll,
  },
  {
    path: "/client",
    name: "client",
    component: client,
  },
  {
    path: "/imgOnload",
    name: "imgOnload",
    component: imgOnload,
  },
  {
    path: "/skeletonScreen",
    name: "skeletonScreen",
    component: skeletonScreen,
  },
  {
    path: "/skeletonMine",
    name: "skeletonMine",
    component: skeletonMine,
  },
  {
    path: "/suckTop",
    name: "suckTop",
    component: suckTop,
  },
  {
    path: "/skeletonMineSec",
    name: "skeletonMineSec",
    component: skeletonMineSec,
  },
  {
    path: "/svgTest",
    name: "svgTest",
    component: svgTest,
  },
  {
    path: "/css_Middle",
    name: "css_Middle",
    component: css_Middle,
  },
  {
    path: "/vueScoped",
    name: "vueScoped",
    component: vueScoped,
  },
  {
    path: "/cssModules",
    name: "cssModules",
    component: cssModules,
  },
  //JS
  {
    path: "/echartsTest",
    name: "echartsTest",
    component: echartsTest,
    meta: {
      hahaha: true,
    },
    beforeEach: (to, from, next) => {
      if (to.meta.hahaha) {
        console.log("eachart");
        next();
      }
    },
  },
  {
    path: "/excalopr",
    name: "excalopr",
    component: excalopr,
  },
  {
    path: "/sortFun",
    name: "sortFun",
    component: sortFun,
    meta: {
      hahaha: true,
    },
    beforeEnter: (to, from, next) => {
      console.log("1");
      
      if (to.meta.hahaha) {
        console.log("eachart");
        next();
      }
    },
  },
  {
    path: "/NodeApi",
    name: "NodeApi",
    component: NodeApi,
  },
  {
    path: "/deepClone",
    name: "deepClone",
    component: deepClone,
  },
  {
    path: "/EventLoop",
    name: "EventLoop",
    component: EventLoop,
  },
  {
    path: "/funCurry",
    name: "funCurry",
    component: funCurry,
  },
  {
    path: "/mvvmUse",
    name: "mvvmUse",
    component: mvvmUse,
  },
  {
    path: "/algorithmJob",
    name: "algorithmJob",
    component: algorithmJob,
  },
  {
    path: "/VueLifeCycle",
    name: "VueLifeCycle",
    component: VueLifeCycle,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   // if (to.meta.requireAuth) {
//   //   console.log("enter");
//   //   next();
//   // } else {
//   //   next();
//   // }
//   if (to.path == "/echartsTest") {
//     next();
//     console.log("emter");
//   } else {
//     next();
//   }
// });

// router.afterEach((to, from) => {
//   console.log(to);

//   if (to.meta.hahaha) {
//     console.log("enter");
//   }
//   // if (to.path == "/echartsTest") {
//   //   next();
//   //   console.log("emter");
//   // } else {
//   //   next();
//   // }
// });

export default router;
