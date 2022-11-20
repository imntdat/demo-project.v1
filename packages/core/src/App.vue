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

    <hello-world msg="asdasdas" />

    <todo-list :data="['abas', 'asdasdadasd', '123123213']" />

    <a-input />

    <a-button @click="showMessage">Click</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { TodoList } from "@demo/common"

import HelloWorld from "@/components/HelloWorld.vue"

export default defineComponent({
  components: { HelloWorld, TodoList },

  methods: {
    showMessage() {
      this.$notification.success({ description: "", message: "Click" })
    },
  },
})
</script>
