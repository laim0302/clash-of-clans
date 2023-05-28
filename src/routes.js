import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from "vue-router";

import HomePage from "@/views/Home_view.vue";
import AboutPage from "@/views/About_view.vue";
import Page404 from "@/views/Page404_view.vue";

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
    path: "/:CatchAll(.*)",
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
