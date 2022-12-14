import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/filme/:id",
    name: "filme",
    component: () => import("../views/Filme.vue"),
    props: true,
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
