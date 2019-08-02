new Vue({
  el: "#app",
  data: {
    visible: "A",
    campingItems: ["tent", "sleepingbag", "backpack", "pad"],
    bookSeries: [
      { title: "Lord of the Rings", author: "J.R.R. Tolkiens", books: "3" }
    ],
    testObject: { name: "TESTOBJECT", data: [1.67, 1.33, 0.98, 2.21] }
  },
  computed: {
    aVisible() {
      return this.visible === "A";
    },
    bVisible() {
      return this.visible === "B";
    }
  },
  methods: {
    toggleVisible() {
      if (this.visible === "A") {
        this.visible = "B";
      } else {
        this.visible = "A";
      }
    }
  }
});
