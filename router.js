/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';
import Home from "./views/Home.vue";
import Login from "./views/Contact.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
     {
    path: "/",
    component: Home
  },
  {
    path: "/Contact",
    component: Contact
  }
  {
  ]
});
export default router
