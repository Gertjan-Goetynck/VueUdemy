new Vue({
  el: "#exercise",
  data: {
    highlight: true,
    shrink: false,
    red: true,
    underline: true,
    cssClass: "",
    progress: 0
  },
  methods: {
    startProgressbar() {
      const vm = this;
      const progress = setInterval(function() {
        if (vm.progress < 500) {
          console.log("test");
          vm.progress = vm.progress + 1;
        } else {
          console.log("stopped");
          clearInterval(progress);
        }
      }, 60);
    },
    startEffect: function() {
      const vm = this;
      setInterval(function() {
        vm.highlight = !vm.highlight;
        vm.shrink = !vm.shrink;
      }, 3000);
    }
  },
  computed: {
    progressWidth() {
      return this.progress + "px";
    }
  }
});
