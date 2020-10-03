<template>
  <div class="table">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class TemplateTable extends mixins(AppMixin) {}
</script>

<style lang="scss" scoped>
.table {
  $block: &;
  @apply w-full;

  &__row {
    $element: &;
    @apply flex justify-between items-center;
  }

  &__col {
    $element: &;
    @apply flex items-center w-full py-4;
  }
}
</style>
