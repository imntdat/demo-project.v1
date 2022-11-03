<template>
  <ul class="todo-list">
    <li v-for="item in data" :key="item">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

export default Vue.extend({
  props: {
    data: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.todo-list {
  list-style-type: none;

  li {
    padding: 6px;
    background: rgba(0, 0, 0, 0.05);

    & + li {
      margin-top: 8px;
    }
  }
}
</style>
