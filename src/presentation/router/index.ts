import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import useAUthState from '../bloc/auth/AuthState';

// Layout
import DashLayout from "../layout/DashLayout.vue"

// Components
import Login from "../modules/Login.vue";
import Pendings from "../modules/pendings/Pendings.vue";
import Concillied from "../modules/concillied/Concillied.vue";
import NotFound from "../components/NotFound.vue"

const routes: Array<RouteRecordRaw> = [
   {
      path: "/",
      name: "redirect-to-dashboard",
      redirect: { name: "Dashboard" },
   },
   {
      path: "/login",
      name: "Login",
      meta: { requiresAuth: false, },
      component: Login,
   },
   {
      path: "/dashboard",
      name: "Dashboard",
      meta: { requiresAuth: true, },
      component: DashLayout,
      redirect: { name: "Pendings" },
      children: [
         {
            path: "/pendings",
            name: "Pendings",
            meta: { requiresAuth: true, },
            component: Pendings,
         },
         {
            path: "/confirmed",
            name: "Concillied",
            meta: { requiresAuth: true, },
            component: Concillied,
         }
      ]
   },
   {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: NotFound
   }
];

const router = createRouter({
   history: createWebHistory(import.meta.env.VITE_BASE_URL),
   routes,
   linkActiveClass: "active",
});

router.beforeEach((to, _, next) => {
   const store = useAUthState();
   if (to.matched.some((record) => record.meta.requiresAuth)) {
      store.initAuth();
      if (store.isAuthenticated) {
         next();
         return;
      }
      next('/login');
   } else {
      next();
   }
});


export default router;