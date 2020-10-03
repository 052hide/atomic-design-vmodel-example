<template>
  <div class="page">
    <section>
      <h3>❌ atomコンポーネントごとにvalidationコンポーネントを作成する</h3>
      <pre><code>{{ htmlStrings[0] }}</code></pre>
      <p>コンポーネントの数が多くなるのでメンテナンスが大変</p>
      <p>子コンポーネントで必要なpropsを大量にわたさないといけない</p>
      <p>atomsコンポーネントの変更に影響を受ける</p>
    </section>
    <section>
      <h3>
        ⭕
        validationとエラー表示に特化したコンポーネントにして、formはslotで渡す
      </h3>
      <pre><code>{{ htmlStrings[1] }}</code></pre>
      <p>コンポーネントはひとつだけなのでメンテナンスが楽</p>
      <p>コンポーネントはひとつだけなのですべてのformでスタイルが統一される</p>
      <p>propsがシンプル</p>
      <p>atomsコンポーネントの変更に影響を受けない</p>
    </section>
    <section>
      <h3>使ってみる</h3>
      <pre><code>{{ htmlStrings[2] }}</code></pre>
      <validation-form-item
        name="form"
        validation-mode="aggressive"
        validation-rules="required|max:10"
      >
        <atom-form-input-text v-model="form.text" />
      </validation-form-item>
      <p>form.text: {{ form.text }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputText from '~/components/atoms/AtomFormInputText/index.vue'
import ValidationFormItem from '~/components/molecules/ValidationFormItem/index.vue'

@Component({
  components: {
    AtomFormInputText,
    ValidationFormItem,
  },
})
export default class PageSamplesValidation extends mixins(AppMixin) {
  form = {
    text: '',
  }

  htmlStrings: string[] = [
    `<ValidationProvider
  v-slot="{ errors }"
  :mode="validationMode"
  :name="name"
  :rules="validationRules"
  class="validation-form-item"
>
  <atom-input
    v-model="inputValue"
    :theme="theme"
    :size="size"
    :width="width"
    :rounded="rounded"
    is-disabled="isDisabled"
  />
  <span class="validation-form-item__error">{{ errors[0] }}</span>
</ValidationProvider>

@Prop({ required: true }) name!: string
@Prop({ default: 'aggressive' }) validationMode!: string
@Prop({ default: '' }) validationRules!: string
@Prop({ default: '' }) value!: string
@Prop({ default: '' }) theme!: string
@Prop({ default: '' }) size!: string
@Prop({ default: '' }) width!: string
@Prop({ default: '' }) rounded!: string
@Prop({ default: false }) isDisabled!: boolean

get inputValue: string = { return this.value }
set inputValue(value: string) { this.$emit('input', value) }

// 同じ用にAtomInput系コンポーネント分コンポーネント作成
`,
    `<ValidationProvider
  v-slot="{ errors }"
  :mode="validationMode"
  :name="name"
  :rules="validationRules"
  class="validation-form-item"
>
  <slot />
  <span class="validation-form-item__error">{{ errors[0] }}</span>
</ValidationProvider>

@Prop({ required: true }) name!: string
@Prop({ default: 'aggressive' }) validationMode!: string
@Prop({ default: '' }) validationRules!: string`,
    `<validation-form-item
  name="form"
  validation-mode="aggressive"
  validation-rules="required|max:10"
>
  <atom-form-input-text v-model="form.text" />
</validation-form-item>
<p>form.text: {{ form.text }}</p>

form = { text: '' }`,
  ]
}
</script>

<style lang="scss" scoped>
h3 {
  @apply font-bold leading-loose;
}

pre {
  @apply my-4 p-4 bg-gray-200 rounded;
}

section + section {
  @apply mt-8;
}
</style>
