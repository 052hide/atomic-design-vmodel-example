<template>
  <div class="page">
    <template-code>
      <section>
        <h3>
          基本的な使い方は<nuxt-link to="/samples/object"
            >v-modelで複数の値をを扱う</nuxt-link
          >参照
        </h3>
      </section>
      <section>
        <h3>親と子で別の値を参照する</h3>
        <pre><code>{{ htmlStrings[0] }}</code></pre>
        <p>
          Atomコンポーネントでは🔺としていたやりかただけど大きなコンポーネントでは有効な使い方になる
        </p>
        <p>検索条件機能を考えてみる</p>
        <p><img :src="require('~/assets/images/v_model_submit.png')" /></p>
        <p>確定アクションを行う前に親に変更を伝えていいのか？</p>
        <p>&lt;予期せぬ挙動例&gt;</p>
        <p>ページネーションしたら検索条件が変わってしまった</p>
        <p>項目の並び替えをしたら検索条件が変わってしまった</p>
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
export default class PageSamplesVModelComponentMore extends mixins(AppMixin) {
  htmlStrings: string[] = [
    `<input v-model="stateCondition" type="text" @input="submit" />

@Prop({ default: () => { return { a: '', b: '' } } }) propCondition!: { a: string; b: string }

stateCondition = { a: '', b: '' }

created() { this.stateCondition = this.propCondition }
submit() { this.@emit('input', this.stateCondition) }`,
  ]
}
</script>

<style lang="scss" scoped></style>
