<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale:{{$route.query.locale}}</p>
    <hr />
    <button class="btn btn-primary" @click="confirm">Confirm</button>
    <br />
    <br />
    <!-- <div style="height:700px;"></div> -->
    <p id="data">Extra data</p>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
  methods: {
    confirm() {
      this.confirmed = !this.confirmed;
    }
  },
  data() {
    return {
      confirmed: false
    };
  }
};
</script>
