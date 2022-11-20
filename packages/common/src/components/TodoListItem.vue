<template>
  <a-tag>{{ text }}</a-tag>
</template>

<script lang="ts">
import { Tag as ATag } from "ant-design-vue"
import { defineComponent } from "vue"

export default defineComponent({
  components: { ATag },

  props: {
    text: {
      type: String,
      default: undefined,
    },
  },
})
</script>
