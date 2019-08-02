<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot name="text">This is the default text</slot>
    </p>
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
