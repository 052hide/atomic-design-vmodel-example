<template>
  <div class="atom-form-input-date-period">
    <input
      v-model="syncDatePeriod.from"
      type="date"
      class="atom-form-input-date-period__input--start"
      :disabled="isDisabled"
    />
    <p class="atom-form-input-date-period__label">〜</p>
    <input
      v-model="syncDatePeriod.to"
      type="date"
      class="atom-form-input-date-period__input--end"
      :disabled="isDisabled"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class AtomFormInputDatePeriodSyncObject extends mixins(
  AppMixin
) {
  @Prop({ default: false }) isDisabled!: boolean
  @PropSync('datePeriod') syncDatePeriod!: {
    from: string
    to: string
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
