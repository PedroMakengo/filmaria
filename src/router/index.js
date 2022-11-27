import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/erro",
    name: "error",
    component: () => import("../views/Erro.vue"),
  },
  {
    path: "/filme",
    name: "filme",
    component: () => import("../views/Filme.vue"),
  },
  {
    path: "/salvos",
    name: "meusfilmes",
    component: () => import("../views/MeusFilmes.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    // redirect: "/err",
    component: () => import("../views/Erro.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
