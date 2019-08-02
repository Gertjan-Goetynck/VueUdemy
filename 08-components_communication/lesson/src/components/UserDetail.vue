<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{switchName}}</p>
    <p>User age: {{userAge}}</p>
    <button @click="resetName">Reset</button>
    <button @click="resetFn()">Reset fn callback</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myName: {
      type: String,
      //required: true,
      default: "John Dhoe"
    },
    resetFn: Function,
    userAge: Number
  },
  computed: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    resetName() {
      //Custom event trigger
      this.$emit("nameWasReset", "Gertjan");
    }
  },
  created() {
    eventBus.$on("ageWasEditted", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
