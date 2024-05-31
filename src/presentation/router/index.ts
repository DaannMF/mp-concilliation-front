import { createRouter, createWebHistory } from "vue-router";
import useAUthState from '../bloc/AuthState';

// Layout
import DashLayout from "../layout/DashLayout.vue"

// Components
import Login from "../modules/Login.vue";
import NotFound from "../NotFound.vue"

const routes = [
   {
      path: "/login",
      name: "Login",
      meta: { requiresAuth: false, },
      component: Login,
   },
   {
      path: "/dashboard",
      name: "DashBoard",
      meta: { requiresAuth: false, },
      component: DashLayout,
      // children: [
      //    {
      //       path: "/pendingS",
      //       name: "PendingS",
      //       meta: { requiresAuth: false, },
      //       component: Pendings,
      //    },
      //    {
      //       path: "/confirmed",
      //       name: "Concillied",
      //       meta: { requiresAuth: false, },
      //       component: ConciliadorConfirmados,
      //    }
      // ]
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