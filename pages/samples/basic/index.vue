<template>
  <div class="page">
    <section>
      <pre><code class="language-html">{{ htmlStrings.text }}</code></pre>
      <input v-model="form.text" type="text" />
      <p>form.text: {{ form.text }}</p>
    </section>
    <section>
      <pre><code class="language-html">{{ htmlStrings.select }}</code></pre>
      <select v-model="form.select" :value="true">
        <option></option>
        <option :value="true">Boolean</option>
        <option :value="2">Number</option>
        <option value="string">Text</option>
      </select>
      <p>form.select: {{ form.select }}</p>
    </section>
    <section>
      <pre><code class="language-html">{{ htmlStrings.radio }}</code></pre>
      <input v-model="form.radio" :value="true" type="radio" />
      <input v-model="form.radio" :value="2" type="radio" />
      <input v-model="form.radio" value="string" type="radio" />
      <p>form.radio: {{ form.radio }}</p>
    </section>
    <section>
      <pre><code class="language-html">{{ htmlStrings.check }}</code></pre>
      <input v-model="form.check" type="checkbox" />
      <p>form.check: {{ form.check }}</p>
    </section>
    <section>
      <pre><code class="language-html">{{ htmlStrings.checkList }}</code></pre>
      <input v-model="form.checkList" :value="true" type="checkbox" />
      <input v-model="form.checkList" :value="2" type="checkbox" />
      <input v-model="form.checkList" value="string" type="checkbox" />
      <p>form.checkList: {{ form.checkList }}</p>
    </section>
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
export default class PageSamplesBasic extends mixins(AppMixin) {
  form = {
    text: '',
    select: null,
    check: false,
    checkList: [],
  }

  htmlStrings: { [key: string]: string } = {
    text: `<input v-model="form.text" type="text" />
<p>form.text: {{ form.text }}</p>`,
    select: `<select v-model="form.select" :value="true">
  <option :value="true">Boolean</option>
  <option :value="2">Number</option>
  <option value="string">Text</option>
</select>
<p>form.select: {{ form.select }}</p>`,
    radio: `<input v-model="form.radio" :value="true" type="radio" />
<input v-model="form.radio" :value="2" type="radio" />
<input v-model="form.radio" :value="string" type="radio" />
<p>form.radio: {{ form.radio }}</p>`,
    check: `<input v-model="form.check" type="checkbox" />
<p>form.check: {{ form.check }}</p>`,
    checkList: `<input v-model="form.checkList" :value="true" type="checkbox" />
<input v-model="form.checkList" :value="2" type="checkbox" />
<input v-model="form.checkList" value="string" type="checkbox" />
<p>form.checkList: {{ form.checkList }}</p>`,
  }
}
</script>

<style lang="scss" scoped>
input {
  @apply p-2 border;
}

p {
  @apply leading-loose;
}

pre {
  @apply my-4 p-4 bg-gray-200 rounded;
}

section + section {
  @apply mt-8;
}
</style>
