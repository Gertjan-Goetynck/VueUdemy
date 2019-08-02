<template>
  <div id="app">
    <section class="row">
      <app-healthbar :health="playerHealth">YOU</app-healthbar>
      <app-healthbar :health="monsterHealth">MONSTER</app-healthbar>
    </section>
    <app-actions :gameActive="gameActive" @gameStarted="gameActive = true"></app-actions>
  </div>
</template>

<script>
import Healthbar from "./components/Healthbar";
import Actions from "./components/Actions";
export default {
  components: {
    appActions: Actions,
    appHealthbar: Healthbar
  },
  data() {
    return {
      gameActive: false,
      playerHealth: 100,
      monsterHealth: 100
    };
  }
};
</script>

<style>
</style>
