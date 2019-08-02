import Vue from "vue";
import App from "./App.vue";

//COMMUNICATE BETWEEN SIBLING COMPONENTS
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEditted", age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
