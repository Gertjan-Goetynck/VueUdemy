new Vue({
  el: "#app",
  data: {
    counter: 0,
    xCoord: null,
    yCoord: null
  },
  methods: {
    addCounter(number = 1, event) {
      this.counter += number;
    },
    updateCoords(event) {
      this.xCoord = event.clientX;
      this.yCoord = event.clientY;
    },
    stopCoordsUpdate(event) {
      event.stopPropagation();
    },
    alertMe() {
      alert("alert");
    }
  }
});
