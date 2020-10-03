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
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDatePeriod from '~/components/atoms/AtomFormInputDatePeriod/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'

@Component({
  components: {
    AtomFormInputDatePeriod,
    TemplateTable,
  },
})
export default class PageSamplesObject extends mixins(AppMixin) {
  datePeriod = {
    start: '',
    end: '',
  }
}
</script>

<style lang="scss" scoped></style>
