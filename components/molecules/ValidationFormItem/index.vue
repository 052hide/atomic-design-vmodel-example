<template>
  <ValidationProvider
    v-slot="{ errors }"
    :mode="validationMode"
    :name="name"
    :rules="validationRules"
    class="validation-form-item"
  >
    <!-- NOTE input -->
    <slot />
    <span class="validation-form-item__error">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import { ComponentType } from '~/types'
import { ComponentConst } from '~/consts'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class ValidationFormItem extends mixins(AppMixin) {
  @Prop({ required: true })
  name!: string

  @Prop({ default: ComponentConst.defaultValue.formValidationMode })
  validationMode!: ComponentType.ValidationMode

  @Prop({ default: '' })
  validationRules!: string
}
</script>

<style lang="scss" scoped>
.validation-form-item {
  @apply flex flex-col w-full;

  &__error {
    @apply flex justify-start items-center h-6 text-xs text-red-500;
  }
}
</style>
