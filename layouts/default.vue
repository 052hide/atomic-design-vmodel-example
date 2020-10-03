<template>
  <div class="layout">
    <nuxt-link to="/">メニューに戻る</nuxt-link>
    <div class="layout__main">
      <Nuxt />
    </div>
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

.layout {
  &__main {
    @apply mx-auto my-10 w-full max-w-screen-lg;
  }
}
</style>
