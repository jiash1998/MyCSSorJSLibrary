import Vue from "vue";
import VueRouter from "vue-router";
//伪类按钮
import main from "../views/main";
import btnEffects from "../views/effect/btnEffects";

import conventionLayout from "../views/conventionLayout";
import positionTest from "../views/positionTest";
import heightTest from "../views/heightTest";
import btnSocialShare from "../views/btnSocialShare";
import mediaTest from "../views/mediaTest";
import sortFun from "../views/sortFun";
import searchInput from "../views/searchInput";


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
    children: [
      {
        path: "/main/btnEffects",
        name: "btnEffects",
        component: btnEffects,
      },
    ],
  },
  // {
  //   path: "/btnEffects",
  //   name: "btnEffects",
  //   component: btnEffects
  // },
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
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
