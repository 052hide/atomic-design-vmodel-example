<template>
  <div class="atom-form-input-date-period">
    <input
      v-model="inputValueStart"
      type="date"
      class="atom-form-input-date-period__input--start"
      :disabled="isDisabled"
    />
    <p class="atom-form-input-date-period__label">〜</p>
    <input
      v-model="inputValueEnd"
      type="date"
      class="atom-form-input-date-period__input--end"
      :disabled="isDisabled"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputDatePeriod extends mixins(AppMixin) {
  @Prop({
    default: () => {
      return ComponentConst.defaultValue.formInputDatePeriodValue
    },
  })
  value!: ComponentType.FormInputDatePeriodValue

  @Prop({ default: false })
  isDisabled!: boolean

  get inputValueStart(): string {
    return this.value.start
  }

  set inputValueStart(value: string) {
    this.$emit('input', {
      ...this.value,
      start: value,
    })
  }

  get inputValueEnd(): string {
    return this.value.end
  }

  set inputValueEnd(value: string) {
    this.$emit('input', {
      ...this.value,
      end: value,
    })
  }
}
</script>

<style lang="scss" scoped>
.atom-form-input-date-period {
  $block: &;

  @apply flex justify-start items-center;

  &__input {
    $element: &;

    @apply px-2 w-40 h-10 text-sm border rounded;

    &:focus {
      @apply outline-none;
    }

    &:active {
      @apply outline-none;
    }

    &:disabled {
      @apply text-gray-600 cursor-not-allowed;
    }

    &--start {
      @extend #{$element};
    }

    &--end {
      @extend #{$element};
    }
  }

  &__label {
    @apply mx-2;
  }
}
</style>
