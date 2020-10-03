<template>
  <div
    :class="[
      'atom-form-input-checkbox-group',
      { 'atom-form-input-checkbox-group--disabled': isDisabled },
    ]"
  >
    <div
      v-for="item in items"
      :key="`${name}-${item.value}`"
      class="atom-form-input-checkbox-group__item"
    >
      <p
        v-if="!isLabelRight"
        class="atom-form-input-checkbox-group__item-label--left"
      >
        {{ item.label }}
      </p>
      <input
        v-model="inputValue"
        :value="item.value"
        :disabled="isDisabled"
        type="checkbox"
        class="atom-form-input-checkbox-group__item-input"
      />
      <p
        v-if="isLabelRight"
        class="atom-form-input-checkbox-group__item-label--right"
      >
        {{ item.label }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputChechboxGroup extends mixins(AppMixin) {
  @Prop({ default: false })
  value!: ComponentType.FormOption['value'][]

  @Prop({ default: '' })
  name!: string

  @Prop({
    default: () => {
      return []
    },
  })
  items!: ComponentType.FormOption[]

  @Prop({ default: false })
  isLabelRight!: boolean

  @Prop({ default: false })
  isDisabled!: boolean

  get inputValue(): ComponentType.FormOption['value'][] {
    return this.value
  }

  set inputValue(value: ComponentType.FormOption['value'][]) {
    this.$emit('input', value)
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-checkbox-group {
  $block: &;

  @apply flex h-10;

  &--disabled {
    @apply opacity-25;
  }

  &__item {
    @apply flex justify-start items-center;

    & + & {
      @apply ml-8;
    }
  }

  &__item-label {
    $element: &;

    @apply text-sm;

    &--left {
      @extend #{$element};

      @apply mr-2;
    }

    &--right {
      @extend #{$element};

      @apply ml-2;
    }
  }

  &__item-input {
    @apply px-2 h-10 text-sm border rounded;

    &:focus {
      @apply outline-none;
    }

    &:active {
      @apply outline-none;
    }

    &:disabled {
      @apply cursor-not-allowed;
    }
  }
}
</style>
