import Vue from "vue";
import App from "./App.vue";
import ServerStatus from "./views/Home.vue";

Vue.component("server-status", ServerStatus);

new Vue({
  el: "#app",
  render: h => h(App)
});
