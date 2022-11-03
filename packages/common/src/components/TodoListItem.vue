<template>
  <li>{{ text }}</li>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: undefined,
    },
  },
})
</script>
