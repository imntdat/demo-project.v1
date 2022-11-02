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
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import HelloWorld from "@/components/HelloWorld.vue"

export default Vue.extend({
  components: { HelloWorld },
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
