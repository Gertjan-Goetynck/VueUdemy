new Vue({
  el: "#app",
  data: {
    title: "Hello world",
    link: "https://www.google.com"
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    }
  }
});
