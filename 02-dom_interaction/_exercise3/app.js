new Vue({
  el: "#exercise",
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value < 37 ? "Not there yet" : "Done";
    }
  },
  watch: {
    value: function(value) {
      const vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  }
});
