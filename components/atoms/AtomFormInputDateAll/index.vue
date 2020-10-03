<template>
  <!--
    WARNING: 動かないサンプル用
  -->
  <input
    v-model="inputValue"
    type="date"
    :disabled="isDisabled"
    :class="['atom-form-input-date', widthClass]"
  />
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputDate extends mixins(AppMixin) {
  @Prop({ default: ComponentConst.defaultValue.formInputDateValue })
  value!: string | number | Date | null

  @Prop({ default: ComponentConst.defaultValue.formInputWidth })
  width!: ComponentType.InputWidth

  @Prop({ default: false })
  isDisabled!: boolean

  get widthClass(): string {
    return `atom-form-input-date--width-${this.width}`
  }

  get inputValue(): string {
    if (this.value instanceof Date) {
      return this.value?.toISOString().substr(0, 10) || ''
    } else if (typeof this.value === 'number') {
      return this.value ? new Date(this.value).toISOString().substr(0, 10) : ''
    } else if (typeof this.value === 'string') {
      return this.value
    } else {
      return ''
    }
  }

  set inputValue(value: string) {
    if (this.value instanceof Date) {
      this.$emit('input', value ? new Date(value) : null)
    } else if (typeof this.value === 'number') {
      this.$emit(
        'input',
        value ? new Date(`${value}T00:00:00Z`).getTime() : null
      )
    } else if (typeof this.value === 'string') {
      this.$emit('input', value)
    } else {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-date {
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
