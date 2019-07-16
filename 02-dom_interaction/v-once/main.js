new Vue({
  el: "#app",
  data: {
    title: "Hello"
  },
  methods: {
    changeTitle() {
      this.title = "Hello again";
      return this.title;
    }
  },
  created() {
    //this.changeTitle();
    //this.title = "created";
  }
});
