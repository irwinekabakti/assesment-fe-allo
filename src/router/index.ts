import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import RocketListView from "@/views/RocketListView.vue";
import RocketDetailView from "@/views/RocketDetailView.vue";
import CreateRocketView from "@/views/CreateRocketView.vue";

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
    { path: "/rockets/new", 
      name: "create", 
      component: CreateRocketView 
    },

];

export default createRouter({
  history: createWebHistory(),
  routes,
});
