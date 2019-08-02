<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <p>{{text | toUpperCase | toLowercase}}</p>
    <hr />
    <button @click="fruits.push('Berries')">Add berries</button>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="(fruit,index) in filteredFruits" :key="index">{{fruit}}</li>
    </ul>
    <hr />
    <appList></appList>
  </div>
</template>

<script>
import list from "./List.vue";
import { fruitMixin } from "./fruitMixin.js";
export default {
  mixins: [fruitMixin],

  components: {
    appList: list
  },
  data() {
    return {
      text: "Hello world!"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
