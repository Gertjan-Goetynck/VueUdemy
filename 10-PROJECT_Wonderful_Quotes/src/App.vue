<template>
  <div class="container">
    <progress-bar :maxQuotes="maxQuotes" :currentQuotes="currentQuotes"></progress-bar>
    <app-create @quoteCreated="newQuote"></app-create>
    <app-grid @quoteDeleted="deleteQuote" :quotes="quotes"></app-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import quoteGrid from "./components/quotes/QuoteGrid.vue";
import newQuote from "./components/quotes/NewQuote.vue";
import header from "./components/Header.vue";
export default {
  components: {
    progressBar: header,
    appGrid: quoteGrid,
    appCreate: newQuote
  },

  data() {
    return {
      maxQuotes: 10,
      quotes: ["Just a quote", "test", "test2"],
      created() {}
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete quotes first");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  computed: {
    currentQuotes() {
      return this.quotes.length;
    }
  }
};
</script>

<style>
</style>
