<template>
  <div class="page">
    <template-code>
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
    </template-code>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'
import TemplateCode from '~/components/templates/TemplateCode/index.vue'

@Component({
  components: {
    TemplateCode,
  },
})
export default class PageSamplesVModelBase extends mixins(AppMixin) {
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

<style lang="scss" scoped></style>
