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
    <nuxt-link to="/samples/date/all" class="underline"
      >→コンポーネントをひとつにまとめたやつ (動かない)</nuxt-link
    >
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDate from '~/components/atoms/AtomFormInputDate/index.vue'
import AtomFormInputDateNumber from '~/components/atoms/AtomFormInputDateNumber/index.vue'
import AtomFormInputDateDate from '~/components/atoms/AtomFormInputDateDate/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'

@Component({
  components: {
    AtomFormInputDate,
    AtomFormInputDateNumber,
    AtomFormInputDateDate,
    TemplateTable,
  },
})
export default class PageSamplesDate extends mixins(AppMixin) {
  text: string = ''
  number: number | null = null
  date: Date | null = null
}
</script>

<style lang="scss" scoped></style>
