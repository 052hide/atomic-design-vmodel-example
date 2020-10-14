<template>
  <input
    v-model="childValue"
    type="text"
    class="atom-form-input-text"
    @input="$emit('update:childValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputSync extends mixins(AppMixin) {
  @Prop({ default: '' }) childValue!: string
}
</script>

<style lang="scss" scoped>
.atom-form-input-text {
  $block: &;

  @apply px-2 h-10 text-sm border rounded;

  &:focus {
    @apply outline-none;
  }

  &:active {
    @apply outline-none;
  }

  &:disabled {
    @apply text-gray-600 cursor-not-allowed;
  }

  &--width {
    &-sm {
      @apply w-40;
    }
    &-base {
      @apply w-56;
    }
    &-lg {
      @apply w-84;
    }
    &-full {
      @apply w-full;
    }
  }
}
</style>
