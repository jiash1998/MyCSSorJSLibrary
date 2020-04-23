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

//JS
import sortFun from "../views/JSFun/sortFun";
import echartsTest from "../views/JSFun/echartsTest";
import excalopr from "../views/JSFun/excalopr";
import NodeApi from "../views/JSFun/NodeApi";


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
    path: "/sortFun",
    name: "sortFun",
    component: sortFun,
  },
  {
    path: "/searchInput",
    name: "searchInput",
    component: searchInput,
  },
  {
    path: "/echartsTest",
    name: "echartsTest",
    component: echartsTest,
  },
  {
    path: "/excalopr",
    name: "excalopr",
    component: excalopr,
  },
  {
    path: "/NodeApi",
    name: "NodeApi",
    component: NodeApi,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
