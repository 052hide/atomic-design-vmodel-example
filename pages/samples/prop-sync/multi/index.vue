<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col">
          <atom-form-input-date-period-sync-multi
            :from.sync="dateFrom"
            :to.sync="dateTo"
          />
        </li>
        <li class="table__col">
          <p>dateFrom: {{ dateFrom }}<br />dateTo: {{ dateTo }}</p>
        </li>
      </ul>
    </template-table>
    <template-code class="mt-12">
      <section>
        <h3>子</h3>
        <pre><code class="language-html">{{ htmlStrings.child }}</code></pre>
      </section>
      <section>
        <h3>親</h3>
        <pre><code class="language-html">{{ htmlStrings.parent }}</code></pre>
      </section>
      <section>
        <p>親で指定したprop名が子でも定義される (from, to)</p>
        <p>
          子でpropに対して指定したcomputed (syncFrom,
          syncTo)が定義され、getterではpropをそのままreturn、setterで$emit('update:prop名',
          value)が実行される
        </p>
        <p>
          .syncを使った場合、$emit('update:prop名', value)
          は親の指定のステートにvalueが代入される特殊なもの
        </p>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDatePeriodSyncMulti from '~/components/atoms/AtomFormInputDatePeriodSyncMulti/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    AtomFormInputDatePeriodSyncMulti,
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesPropSyncMulti extends mixins(AppMixin) {
  dateFrom: string = ''
  dateTo: string = ''

  htmlStrings: { [key: string]: string } = {
    child: `<input v-model="syncFrom" />
<p class="atom-form-input-date-period__label">〜</p>
<input v-model="syncTo" />

@PropSync('from') syncFrom!: string
@PropSync('to') syncTo!: string`,
    parent: `<atom-form-input-date-period-sync
  :from.sync="dateFrom"
  :to.sync="dateTo"
/>

dateFrom: string = ''
dateTo: string = ''`,
  }
}
</script>

<style lang="scss" scoped></style>
