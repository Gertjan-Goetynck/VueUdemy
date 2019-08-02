<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <server-list></server-list>
      </div>
      <div class="col-xs-12 col-sm-6">
        <server-details></server-details>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/layout/Header.vue";
import AppFooter from "../components/layout/Footer.vue";
import ServerList from "../components/ServerList.vue";
import ServerDetails from "../components/ServerDetails.vue";
export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "server-list": ServerList,
    "server-details": ServerDetails
  }
};
</script>