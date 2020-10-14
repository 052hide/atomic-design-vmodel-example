<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col">
          <atom-form-input-date-period-sync-object :date-period="datePeriod" />
        </li>
        <li class="table__col">
          <p>datePeriod: {{ datePeriod }}</p>
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
        <p>オブジェクトをそのまま渡せる</p>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDatePeriodSyncObject from '~/components/atoms/AtomFormInputDatePeriodSyncObject/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    AtomFormInputDatePeriodSyncObject,
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesPropSyncObject extends mixins(AppMixin) {
  datePeriod = {
    from: '',
    to: '',
  }

  htmlStrings: { [key: string]: string } = {
    child: `<input v-model="syncDatePeriod.from" />
<p class="atom-form-input-date-period__label">〜</p>
<input v-model="syncDatePeriod.to" />

@PropSync('datePeriod') syncDatePeriod!: { from: string; to: string }`,
    parent: `<atom-form-input-date-period-sync-2 :date-period="datePeriod" />

datePeriod = { from: '', to: '', }`,
  }
}
</script>

<style lang="scss" scoped></style>
