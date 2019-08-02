<template>
  <div>
    <h3>The author</h3>
    <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>
<script>
export default {
  props: ["quote"],
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>
<style scoped>
div {
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>
