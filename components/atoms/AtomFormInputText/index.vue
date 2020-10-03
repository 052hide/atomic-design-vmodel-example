<template>
  <input
    v-if="isTrim"
    v-model.trim="inputValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :class="['atom-form-input-text', widthClass]"
    @input="keydown"
  />
  <input
    v-else
    v-model="inputValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :class="['atom-form-input-text', widthClass]"
    @input="keydown"
  />
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputText extends mixins(AppMixin) {
  @Prop({ default: '' })
  value!: string

  @Prop({ default: '' })
  placeholder!: string

  @Prop({ default: ComponentConst.defaultValue.formInputWidth })
  width!: ComponentType.InputWidth

  @Prop({ default: false })
  isDisabled!: boolean

  @Prop({ default: ComponentConst.defaultValue.formInputTextType })
  type!: ComponentType.FormInputTextType

  @Prop({ default: false })
  isTrim!: boolean

  @Prop({ default: false })
  useKeydown!: boolean

  get widthClass(): string {
    return `atom-form-input-text--width-${this.width}`
  }

  get inputValue(): string {
    return this.value
  }

  set inputValue(value: string) {
    this.$emit('input', value)
  }

  keydown(e: InputEvent) {
    if (this.useKeydown) {
      this.$emit('input', (e.target as HTMLInputElement).value)
    }
  }
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
