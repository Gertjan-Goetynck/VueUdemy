new Vue({
  el: "#app",
  data: {
    title: "Lifecycle title"
  },
  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before update");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("Before destroy");
  },
  destroy() {
    console.log("Destroy");
  },
  computed: {},
  methods: {
    destroy() {
      this.$destroy();
    }
  }
});
