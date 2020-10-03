<template>
  <vue-select
    v-model="inputValue"
    :options="items"
    :reduce="(item) => item.value"
    label="label"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :class="['atom-form-input-select', widthClass]"
  />
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { CommonType, ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputSelect extends mixins(AppMixin) {
  @Prop({ default: null })
  value!: CommonType.Nullable<ComponentType.FormOption['value']>

  @Prop({ default: '' })
  name!: string

  @Prop({
    default: () => {
      return []
    },
  })
  items!: ComponentType.FormOption[]

  @Prop({ default: '' })
  placeholder!: string

  @Prop({ default: ComponentConst.defaultValue.formInputWidth })
  width!: ComponentType.InputWidth

  @Prop({ default: false })
  isDisabled!: boolean

  get widthClass(): string {
    return `atom-form-input-select--width-${this.width}`
  }

  get inputValue(): CommonType.Nullable<ComponentType.FormOption['value']> {
    return this.value
  }

  set inputValue(
    value: CommonType.Nullable<ComponentType.FormOption['value']>
  ) {
    this.$emit('input', value)
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-select {
  $block: &;

  @apply h-10;

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

  /deep/ .vs {
    &__dropdown-toggle {
      @apply py-0 h-full border border-gray-300 rounded;
    }
    &__selected-options {
      @apply flex items-center h-full;
    }
    &__actions {
      @apply pt-0;
    }
    &__search {
      @apply mt-0;
    }
    &__selected {
      @apply mt-0;
    }
  }
}
</style>
