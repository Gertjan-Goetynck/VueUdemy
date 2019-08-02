<template>
  <div>
    <div class="form-group">
      <label for="first_name">First name:</label>
      <input
        @input="nameChanged(true, $event)"
        type="text"
        id="first_name"
        class="form-control"
        :value="firstName"
      />
    </div>
    <div class="form-group">
      <label for="last_name">Last name:</label>
      <input
        @input="nameChanged(false, $event)"
        type="text"
        id="first_name"
        class="form-control"
        :value="lastName"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      let fullName = "";
      if (isFirst) {
        fullName = event.target.value + " " + this.lastName;
      } else {
        fullName = this.firstName + " " + event.target.value;
      }
      this.value = name;
      this.$emit("input", fullName);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>
<style>
</style>
