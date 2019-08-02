import Vue from "vue";
import App from "./App.vue";

//Only use when creating plugins
Vue.mixin({
  created() {
    console.log("Global mixin created hook");
  }
});

Vue.filter("toLowercase", function(value) {
  return value.toLowerCase();
});

new Vue({
  el: "#app",
  render: h => h(App)
});
