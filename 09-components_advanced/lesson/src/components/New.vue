<template>
  <div>
    <h3>New quote</h3>
  </div>
</template>
<script>
export default {
  props: ["quote"]
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
