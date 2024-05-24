import { createRouter, createWebHistory } from "vue-router";
import Login from "../modules/Login.vue";

const routes = [
   {
      path: "/login",
      name: "Login",
      component: Login,
   },
];

const router = createRouter({
   history: createWebHistory(import.meta.env.VITE_BASE_URL),
   routes,
   linkActiveClass: "active",
});


export default router;