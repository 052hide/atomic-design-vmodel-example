<template>
  <div class="page">
    <template-code>
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
        <h3>🔺 props.valueをdataにコピーしてemitは別で行う</h3>
        <pre><code>{{ htmlStrings[2] }}</code></pre>
        <p>問題ないけど無駄なstateの定義では？</p>
        <p>ただしAtomコンポーネント以外ではかなり使える</p>
        <nuxt-link to="/samples/v-model/component/more"
          >→Atomコンポーネント以外でのv-modelの使い方</nuxt-link
        >
      </section>
      <section>
        <h3>⭕ computedを使う</h3>
        <pre><code>{{ htmlStrings[3] }}</code></pre>
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
        <pre><code>{{ htmlStrings[4] }}</code></pre>
        <p>valueと@inputや@changeなどを定義することになる</p>
        <p>
          コードは意外とシンプルだったりするけどformの種類によってイベントやDOMの種類が異なるので悩むことになる
        </p>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    TemplateCode,
  },
})
export default class PageSamplesVModelComponentAtoms extends mixins(AppMixin) {
  htmlStrings: string[] = [
    `<input v-model="value" type="text" />

@Prop({ required: true }) value!: string`,
    `<input v-model="inputValue" type="text" />

@Prop({ required: true }) value!: string

inputValue: string = this.value`,
    `<input v-model="inputValue" type="text" @input="handle" />

@Prop({ required: true }) value!: string

inputValue: string = ''

created() { this.inputValue = this.value }
handle(value: string) { this.@emit('input', this.inputValue) }`,
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

<style lang="scss" scoped></style>
