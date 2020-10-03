<template>
  <div class="page">
    <section>
      <h3>❌ v-modelでprops.valueを直接参照する</h3>
      <pre><code>{{ htmlStrings[0] }}</code></pre>
      <p>propは変更できない</p>
      <p>やってみると動くがwarningが出る</p>
    </section>
    <section>
      <h3>❌ props.valueをdataにコピーして使う</h3>
      <pre><code>{{ htmlStrings[1] }}</code></pre>
      <p>変更が親コンポーネントに伝わらない</p>
    </section>
    <section>
      <h3>⭕ computedを使う</h3>
      <pre><code>{{ htmlStrings[2] }}</code></pre>
      <p>getでprops.valueをreturn、setでform.valueをemitする</p>
      <p>データソースが必ず親コンポーネントから渡した値になる</p>
      <p>おそらくすべてのform系のdomで同じように書ける</p>
      <p>
        ※確定前の日本語などをstateに反映したいなら<code>@keydown</code>など併用しないといけない
      </p>
      <p><img :src="require('~/assets/images/v_model_cycle.png')" /></p>
    </section>
    <section>
      <h3>おまけ: v-modelを使わない</h3>
      <pre><code>{{ htmlStrings[3] }}</code></pre>
      <p>valueと@inputや@changeなどを定義することになる</p>
      <p>
        コードは意外とシンプルだったりするけどformの種類によってイベントやDOMの種類が異なるので悩むことになる
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class PageSamplesComponent extends mixins(AppMixin) {
  htmlStrings: string[] = [
    `<input v-model="value" type="text" />

@Prop({ required: true }) value!: string`,
    `<input v-model="inputValue" type="text" />

@Prop({ required: true }) value!: string

inputValue: string = this.value`,
    `<input v-model="inputValue" type="text" />

@Prop({ required: true }) value!: string

get inputValue: string = { return this.value }
set inputValue(value: string) { this.$emit('input', value) }`,
    `<input :value="value" type="text" @input="handler" />

@Prop({ required: true }) value!: string

handler(e: InputEvent) { this.$emit('input', (e.target as HTMLInputElement).value) }`,
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
