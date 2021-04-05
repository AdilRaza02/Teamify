import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Draw from "../views/Draw";
import Home from "../views/Home";
import Teams from "../views/Teams";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "TeamDraw", path: "/draw", component: Draw },
  { name: "Teams", path: "/teams", component: Teams },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
