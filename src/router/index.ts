import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/Author/About/AboutView.vue"),
  },
  {
    path: "/lcs",
    name: "Lcs",
    component: () => import("../views/Tools/LcsParser/LcsParser.vue"),
  },
  {
    path: "/jf",
    name: "JFChange",
    component: () => import("../views/Tools/JFTrans/JFChange.vue"),
  },
  {
    path: "/editor",
    name: "LuxEditor",
    component: () => import("../views/Tools/Editor/LuxEditor.vue"),
  },
  {
    path: "/nes",
    name: "NesG",
    component: () => import("../views/Tools/Nes/NesGame.vue"),
  },
  {
    path: "/404",
    name: "404PageNotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashBoard/404/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
