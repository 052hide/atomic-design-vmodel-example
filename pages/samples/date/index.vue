<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"></li>
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>string</p></li>
        <li class="table__col"><atom-form-input-date v-model="text" /></li>
        <li class="table__col">
          <p>{{ text }}</p>
        </li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>number</p></li>
        <li class="table__col">
          <atom-form-input-date-number v-model="number" />
        </li>
        <li class="table__col">
          <p>{{ number }}</p>
        </li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>date</p></li>
        <li class="table__col">
          <atom-form-input-date-date v-model="date" />
        </li>
        <li class="table__col">
          <p>{{ date }}</p>
        </li>
      </ul>
    </template-table>
    <template-code class="mt-12">
      <section>
        <h3>value: string (YYYY-MM-DD)</h3>
        <pre><code class="language-html">{{ htmlStrings.string }}</code></pre>
        <p>詳しくは<code>/components/atoms/AtomFormInputDate</code>参照</p>
        <p>
          DayjsなどDate型ではないものを使いたい場合も多い、APIへ渡す値もstringが多いことを考えると、Atomコンポーネントは一番シンプルに書けるstringで作っておくのがよさそう
        </p>
      </section>
      <section>
        <h3>value: number (unixtime)</h3>
        <pre><code class="language-html">{{ htmlStrings.number }}</code></pre>
        <p>
          詳しくは<code>/components/atoms/AtomFormInputDateNumber</code>参照
        </p>
        <p>
          nullを許可しないといけない
          (undefinedでは変更がリアクティブにならないからだめ)
        </p>
        <p>getでstringに変換、setでnumberに変換してemitする必要がある</p>
      </section>
      <section>
        <p>value: Date</p>
        <pre><code class="language-html">{{ htmlStrings.date }}</code></pre>
        <p>詳しくは<code>/components/atoms/AtomFormInputDateDate</code>参照</p>
        <p>
          nullを許可しないといけない
          (undefinedでは変更がリアクティブにならないからだめ)
        </p>
        <p>getでstringに変換、setでDateに変換してemitする必要がある</p>
      </section>
    </template-code>
    <div class="mt-12">
      <nuxt-link to="/samples/date/all" class="underline"
        >→参考: コンポーネントをひとつにまとめたやつ (動かない)</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDate from '~/components/atoms/AtomFormInputDate/index.vue'
import AtomFormInputDateNumber from '~/components/atoms/AtomFormInputDateNumber/index.vue'
import AtomFormInputDateDate from '~/components/atoms/AtomFormInputDateDate/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    AtomFormInputDate,
    AtomFormInputDateNumber,
    AtomFormInputDateDate,
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesDate extends mixins(AppMixin) {
  text: string = ''
  number: number | null = null
  date: Date | null = null

  htmlStrings: { [key: string]: string } = {
    string: `get inputValue(): string { return this.value }
set inputValue(value: string) { this.$emit('input', value) }`,
    number: `get inputValue(): string { return this.value ? new Date(this.value).toISOString().substr(0, 10) : '' }
set inputValue(value: string) {
  this.$emit('input', value ? new Date(\`\${value}T00:00:00Z\`).getTime() : null)
}`,
    date: `get inputValue(): string { return this.value?.toISOString().substr(0, 10) || '' }
set inputValue(value: string) { this.$emit('input', value ? new Date(value) : null) }`,
  }
}
</script>

<style lang="scss" scoped></style>
