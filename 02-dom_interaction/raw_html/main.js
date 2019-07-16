new Vue({
  el: "#app",
  data: {
    title: "Hello world",
    htmlLink: '<a href="https://www.google.com">Google</a>'
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    }
  }
});
