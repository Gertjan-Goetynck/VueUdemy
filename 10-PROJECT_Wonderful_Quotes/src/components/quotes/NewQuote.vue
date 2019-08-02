<template>
  <div class="row">
    <form>
      <div class="form-group sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <label>Quote</label>
        <textarea class="form-control" name id v-model="quote" rows="3"></textarea>
      </div>
      <div class="form-group sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("quoteCreated", this.quote);
      this.quote = "";
    }
  }
};
</script>
<style>
</style>
