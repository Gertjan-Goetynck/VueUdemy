new Vue({
  el: "#app",
  data: {
    title: "Hello world"
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    }
  }
});
