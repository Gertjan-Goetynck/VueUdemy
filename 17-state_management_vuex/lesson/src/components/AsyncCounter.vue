<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement({amount:100, duration:5000})">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({amount:5,duration:1000})">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions([
      "asyncIncrement",
      "asyncDecrement",
      "increment",
      "decrement"
    ])
  }
};
</script>