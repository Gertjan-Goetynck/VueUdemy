new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter: 0
  },
  methods: {
    calcResult() {
      console.log("method called");
      return this.counter > 5 ? "Greater than 5" : "Not greater than 5";
    }
  },
  computed: {
    result() {
      console.log("computed called");
      return this.counter > 5 ? "Greater than 5" : "Not greater than 5";
    }
  }
});
