<template>
  <div
    :class="[
      'atom-form-input-checkbox',
      { 'atom-form-input-checkbox--disabled': isDisabled },
    ]"
  >
    <p
      v-if="label && !isLabelRight"
      class="atom-form-input-checkbox__label--left"
    >
      {{ label }}
    </p>
    <input
      v-model="inputValue"
      :disabled="isDisabled"
      type="checkbox"
      class="atom-form-input-checkbox__input"
    />
    <p
      v-if="label && isLabelRight"
      class="atom-form-input-checkbox__label--right"
    >
      {{ label }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputChechbox extends mixins(AppMixin) {
  @Prop({ default: false })
  value!: boolean

  @Prop({ default: '' })
  label!: string

  @Prop({ default: false })
  isLabelRight!: boolean

  @Prop({ default: false })
  isDisabled!: boolean

  get inputValue(): boolean {
    return this.value
  }

  set inputValue(value: boolean) {
    this.$emit('input', value)
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-checkbox {
  $block: &;

  @apply flex justify-start items-center h-10;

  &--disabled {
    @apply opacity-25;
  }

  &__label {
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

  &__input {
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
