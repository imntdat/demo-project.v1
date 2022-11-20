<template>
  <ul class="todo-list">
    <todo-list-item v-for="item in data" :key="item" :text="item" />
    <div />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

import TodoListItem from "./TodoListItem.vue"

export default defineComponent({
  components: { TodoListItem },

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
    background: rgba(0, 0, 0, 0.03);
    color: yellowgreen;

    & + li {
      margin-top: 8px;
    }
  }
}
</style>
