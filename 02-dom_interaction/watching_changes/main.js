new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  computed: {},
  watch: {
    counter: function(value) {
      const vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {}
});
