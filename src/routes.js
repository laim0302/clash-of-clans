import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from "vue-router";

import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import Page404 from "@/views/Page404.vue";
import Item from "@/views/ItemAliasPage.vue";

const routeHistory = createWebHistory(process.env.BASE_URL);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/item/:itemAlias",
    name: "itemAlias",
    component: Item,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "404",
  //   component: Page404,
  // },
  {
    path: "/:CatchAll(.*)*",
    name: "404",
    component: Page404,
  },
];

export const links = [
  {
    title: "Home",
    alias: "home",
    url: "/",
  },
  {
    title: "About",
    alias: "about",
    url: "/about",
  },
];

const router = createRouter({
  history: routeHistory,
  routes,
});

export default router;
