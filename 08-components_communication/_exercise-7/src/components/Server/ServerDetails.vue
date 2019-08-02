<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <table v-else>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>status</th>
      </tr>
      <tr>
        <td>{{server.id}}</td>
        <td>{{server.name}}</td>
        <td>
          {{server.status}}
          <button @click="changeStatus">Fix status</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      server: null,
      editedServer: null
    };
  },
  created() {
    eventBus.$on("serverDetailsPassed", data => {
      this.server = data;
    });
  },
  methods: {
    changeStatus() {
      this.server.status = "normal";
    }
  }
};
</script>

<style>
</style>
