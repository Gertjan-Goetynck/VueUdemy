import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  //history mode removes the hashtag from URLs. Only use if server is configured correctly
  mode: "history",
  //control scroll behavior, needed when there is a #id in the url
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeeach");
  next();
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
