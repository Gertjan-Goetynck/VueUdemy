<template>
  <div>
    <section class="row controls" v-if="!gameActive">
      <div class="small-12 columns">
        <button id="start-game" @click="$emit('gameStarted')">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-if="gameActive">
      <div class="small-12 columns">
        <button id="attack" @click="playerAttack">ATTACK</button>
        <button id="special-attack" @click="$emit('playerSpecialAttacked')">SPECIAL ATTACK</button>
        <button id="heal" @click="$emit('playerHealed')">HEAL</button>
        <button id="give-up" @click="$emit('playerSurrendered')">GIVE UP</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["gameActive"],
  methods: {
    playerAttack() {
      const playerDamage = this.calculateDamage(1, 10);

      this.$emit("playerAttacked");
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    }
  }
};
</script>
