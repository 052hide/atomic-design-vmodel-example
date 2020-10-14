<template>
  <div class="page">
    <template-table>
      <ul class="table__row">
        <li class="table__col"><p>input</p></li>
        <li class="table__col"><p>output</p></li>
      </ul>
      <ul class="table__row">
        <li class="table__col">
          <atom-form-input-sync
            :child-value.sync="parentValue"
            @input="$emit('update:parentValue', $event.target.value)"
          />
        </li>
        <li class="table__col">
          <p>parentValue: {{ parentValue }}</p>
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
        <p>$emit('update:prop名', value)が親のデータに反映される</p>
      </section>
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import AtomFormInputSync from '~/components/atoms/AtomFormInputSync/index.vue'
import TemplateTable from '~/components/templates/TemplateTable/index.vue'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    AtomFormInputSync,
    TemplateTable,
    TemplateCode,
  },
})
export default class PageSamplesPropSync extends mixins(AppMixin) {
  parentValue: string = ''

  htmlStrings: { [key: string]: string } = {
    child: `<input v-model="childValue" @input="$emit('update:childValue', $event.target.value)" />

@Prop({ default: '' }) childValue!: string`,
    parent: `<atom-form-input-sync :child-value.sync="parentValue" />

parentValue: string = ''`,
  }
}
</script>

<style lang="scss" scoped></style>
