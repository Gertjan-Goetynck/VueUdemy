const component = {
  data() {
    return {
      status: "critical"
    };
  },
  template:
    "<p>Server Status: {{status}}<button @click='change'>Change</button></p>",
  methods: {
    change() {
      this.status = "normal";
    }
  }
};

new Vue({
  el: "#app",
  components: {
    "my-cmp": component
  }
});
