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
    <template-code class="mt-12">
      <section>
        <h3>modifier: なし</h3>
        <pre><code class="language-html">{{ htmlStrings.vModel }}</code></pre>
        <p>valueがstringとして扱われる</p>
      </section>
      <section>
        <h3>modifier: number</h3>
        <pre><code class="language-html">{{ htmlStrings.vModelNumber }}</code></pre>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesVModelNumber extends mixins(AppMixin) {
  text: number = 0
  number: number = 0

  htmlStrings: { [key: string]: string } = {
    vModel: `<input v-model="text" type="number" />`,
    vModelNumber: `<input v-model.number="number" type="number" />`,
  }
}
</script>

<style lang="scss" scoped></style>
