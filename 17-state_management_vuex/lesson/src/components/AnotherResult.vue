<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks is {{stringCounter}}</p>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.STRING_COUNTER
    })
  }
};
</script>