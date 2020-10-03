<template>
  <textarea
    v-model="inputValue"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :class="['atom-form-input-textarea', widthClass]"
    @input="keydown"
  />
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputTextarea extends mixins(AppMixin) {
  @Prop({ default: '' })
  value!: string

  @Prop({ default: 2 })
  rows!: number

  @Prop({ default: '' })
  placeholder!: string

  @Prop({ default: ComponentConst.defaultValue.formInputWidth })
  width!: ComponentType.InputWidth

  @Prop({ default: false })
  isDisabled!: boolean

  @Prop({ default: false })
  useKeydown!: boolean

  get widthClass(): string {
    return `atom-form-input-textarea--width-${this.width}`
  }

  get inputValue(): string {
    return this.value
  }

  set inputValue(value: string) {
    this.$emit('input', value)
  }

  keydown(e: InputEvent) {
    if (this.useKeydown) {
      this.$emit('input', (e.target as HTMLTextAreaElement).value)
    }
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-textarea {
  $block: &;

  @apply px-2 py-2 text-sm border rounded;

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
