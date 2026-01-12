// import { createRouter, createWebHistory } from "vue-router";
// import RocketListView from "@/views/RocketListView.vue";
// import RocketDetailView from "@/views/RocketDetailView.vue";

// const routes = [
//   { path: "/", name: "list", component: RocketListView },
//   { path: "/rocket/:id", name: "detail", component: RocketDetailView },
// ];

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });

import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import RocketListView from "@/views/RocketListView.vue";
import RocketDetailView from "@/views/RocketDetailView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "list",
    component: RocketListView,
  },
  {
    path: "/rocket/:id",
    name: "detail",
    component: RocketDetailView,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
