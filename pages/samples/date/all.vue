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
        <li class="table__col">
          <atom-form-input-date-all v-model="allText" />
        </li>
        <li class="table__col">
          <p>{{ allText }}</p>
        </li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>number</p></li>
        <li class="table__col">
          <atom-form-input-date-all v-model="allNumber" />
        </li>
        <li class="table__col">
          <p>{{ allNumber }}</p>
        </li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>date</p></li>
        <li class="table__col">
          <atom-form-input-date-all v-model="allDate" />
        </li>
        <li class="table__col">
          <p>{{ allDate }}</p>
        </li>
      </ul>
    </template-table>
    <nuxt-link to="/samples/date" class="underline">→動くやつ</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputDateAll from '~/components/atoms/AtomFormInputDateAll/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'

@Component({
  components: {
    AtomFormInputDateAll,
    TemplateTable,
  },
})
export default class PageSamplesDateAll extends mixins(AppMixin) {
  allText: string = ''
  allNumber: number | null = null
  allDate: Date | null = null
}
</script>

<style lang="scss" scoped></style>
