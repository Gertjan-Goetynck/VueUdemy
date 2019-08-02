<template>
  <div id="app">
    <button @click="selectedComponent = 'appQuote'">Quote</button>
    <button @click="selectedComponent ='appAuthor'">Author</button>
    <button @click="selectedComponent='appNew'">New</button>
    <hr />
    <p>{{selectedComponent}}</p>
    <hr />
    <!-- dynamically load component based on the selectedComponent data -->
    <!-- Keep alive makes sure components don't get destroyed  -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import appAuthor from "./components/Author";
import appNew from "./components/New";
export default {
  components: {
    appQuote: Quote,
    appAuthor,
    appNew
  },
  data() {
    return {
      selectedComponent: "appQuote"
    };
  }
};
</script>

<style>
h1 {
  color: red;
}
</style>
