import { createRouter, createWebHistory } from "vue-router";
import Schedule from "../views/Schedule.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/schedule",
      name: "Schedule",
      component: Schedule,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
