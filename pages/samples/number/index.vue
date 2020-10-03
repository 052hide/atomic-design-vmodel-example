<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"></li>
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output (+1)</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>v-model</p></li>
        <li class="table__col"><input v-model="text" type="number" /></li>
        <li class="table__col">
          <p>{{ text + 1 }}</p>
        </li>
      </ul>
      <ul class="table__row">
        <li class="table__col"><p>v-model.number</p></li>
        <li class="table__col">
          <input v-model.number="number" type="number" />
        </li>
        <li class="table__col">
          <p>{{ number + 1 }}</p>
        </li>
      </ul>
    </template-table>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'

@Component({
  components: {
    TemplateTable,
  },
})
export default class PageSamplesNumber extends mixins(AppMixin) {
  text: number = 0
  number: number = 0
}
</script>

<style lang="scss" scoped></style>
