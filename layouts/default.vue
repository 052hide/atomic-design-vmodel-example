<template>
  <div class="layout">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class DefaultLayout extends mixins(AppMixin) {}
</script>

<style lang="scss" scoped>
html {
  @apply font-sans;
}
</style>
