<template>
  <div>
    <h1>The User Page</h1>
    <br />
    <button @click="navigateToHome" class="btn btn-primary">Go home</button>
    <br />
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
  //Watches for changes in order to change data gotten from the url variable
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     }
  //   }
};
</script>
