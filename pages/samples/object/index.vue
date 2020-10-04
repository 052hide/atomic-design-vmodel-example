<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col">
          <atom-form-input-date-period v-model="datePeriod" />
        </li>
        <li class="table__col">
          <p>start: {{ datePeriod.start }}<br />end: {{ datePeriod.end }}</p>
        </li>
      </ul>
    </template-table>
    <template-code class="mt-12">
      <section>
        <h3>子</h3>
        <pre><code class="language-html">{{ htmlStrings.child }}</code></pre>
        <p>valueはオブジェクト型にする</p>
        <p>それぞれのform毎にcomputedを作成しv-modelで参照する</p>
      </section>
      <section>
        <h3>親</h3>
        <pre><code class="language-html">{{ htmlStrings.parent }}</code></pre>
        <p>v-modelで子のvalue型で渡すだけ</p>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDatePeriod from '~/components/atoms/AtomFormInputDatePeriod/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    AtomFormInputDatePeriod,
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesObject extends mixins(AppMixin) {
  datePeriod = {
    start: '',
    end: '',
  }

  htmlStrings: { [key: string]: string } = {
    child: `<div class="atom-form-input-date-period">
  <input v-model="inputValueStart" type="date" />
  <p class="atom-form-input-date-period__label">〜</p>
  <input v-model="inputValueEnd" type="date" />
</div>

@Prop({ required: true }) value!: { start: string; end: string; }

get inputValueStart(): string { return this.value.start }
set inputValueStart(value: string) {
  this.$emit('input', {
    ...this.value,
    start: value,
  })
}

get inputValueEnd(): string { return this.value.end }
set inputValueEnd(value: string) {
  this.$emit('input', {
    ...this.value,
    end: value,
  })
}
`,
    parent: `<atom-form-input-date-period v-model="datePeriod" />

datePeriod = { start: '', end: '' }`,
  }
}
</script>

<style lang="scss" scoped></style>
