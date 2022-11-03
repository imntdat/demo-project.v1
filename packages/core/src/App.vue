<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>

      <a
        href="https://vuejs.org/"
        target="_blank"
        hresf="https://vuejs.org/"
        tagrget="_blank"
        hsref="https://vuejs.org/"
        targeft="_blank"
      >
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <HelloWorld msg="asdasdas" />

    <button
      href="https://vuejs.org/"
      target="_blank"
      hresf="https://vuejs.org/"
      tagrget="_blank"
      hsref="https://vuejs.org/"
      targeft="_blank"
    >
      ASDA
    </button>

    <TodoList :data="['abas', 'asdasdadasd', '123123213']" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import { TodoList } from "@demo/common"

import HelloWorld from "@/components/HelloWorld.vue"

export default Vue.extend({
  components: { HelloWorld, TodoList },
})
</script>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}

.todo-list {
  list-style-type: none;

  li {
    padding: 6px;
    background: rgba(0, 0, 0, 0.05);
    color: black;

    & + li {
      margin-top: 8px;
    }
  }
}
</style>
