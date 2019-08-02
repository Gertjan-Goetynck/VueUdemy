<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        :key="server.id"
        @click="viewServerDetails(server)"
      >{{server.name}} {{server.status}}</li>
    </ul>
  </div>
</template>


<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      servers: [
        { id: 1, name: "server 1", status: "critical" },
        { id: 2, name: "server 2", status: "please send help" },
        { id: 3, name: "server 3", status: "exploded" },
        { id: 4, name: "server 4", status: "active" },
        { id: 5, name: "server 5", status: "active" }
      ]
    };
  },
  methods: {
    viewServerDetails(server) {
      eventBus.$emit("serverDetailsPassed", server);
    }
  }
};
</script>


<style>
</style>
