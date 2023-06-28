import {
  createRouter,
  createWebHistory,
  // createWebHashHistory,
} from "vue-router";

import HomePage from "@/views/Home_view.vue";
import AboutPage from "@/views/About_view.vue";
import Page404 from "@/views/Page404_view.vue";
import Item from "@/views/ItemAlias_view.vue";

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
    path: "/:itemAlias",
    name: "itemAlias",
    component: Item,
    beforeEnter: (to, from, next) => {
      // console.log(Item);
      // console.log("to: ", to);
      // console.log("from: ", from);
      // console.log("next: ", next);
      if (Item) {
        console.log(Item);
        next();
      } else {
        next({ name: "404" });
      }
    },
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "404",
  //   component: Page404,
  // },
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

// router.beforeEach((to, from, next) => {
//   console.log(Item);
//   console.log("to: ", to);
//   console.log("from: ", from);
//   console.log("next: ", next);

//   if (Item) {
//     console.log("aaaaaaaaaaa");
//     next();
//   } else {
//     console.log("xxxxxxxxxxxxxxx");
//   }
// });

export default router;
