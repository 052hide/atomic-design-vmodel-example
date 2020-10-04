<template>
  <div class="code">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class TemplateCode extends mixins(AppMixin) {}
</script>

<style lang="scss" scoped>
input {
  @apply p-2 border;
}

p {
  @apply leading-loose;
}

h3 {
  @apply font-bold;
}

pre {
  @apply my-4 p-4 bg-gray-200 rounded;
}

section + section {
  @apply mt-8;
}
</style>
