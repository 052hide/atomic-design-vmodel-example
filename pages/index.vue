<template>
  <div class="page">
    <ul class="menu">
      <li class="menu__item">
        <nuxt-link to="/samples/basic" class="menu__link"
          >v-model基礎</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/component/atoms" class="menu__link"
          >Atomコンポーネントでv-modelの使い方</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/component/more" class="menu__link"
          >Atom以外のコンポーネントでv-modelの使い方</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/number" class="menu__link"
          >v-modelで数値を扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/date" class="menu__link"
          >v-modelで日付を扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/object" class="menu__link"
          >v-modelで複数の値をを扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/validation" class="menu__link"
          >Validationコンポーネントの作り方</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class PageIndex extends mixins(AppMixin) {}
</script>

<style lang="scss" scoped>
.page {
  $block: &;
  @apply px-8 py-12;
}

.menu {
  $block: &;

  &__item {
    $element: &;

    & + & {
      @apply mt-4;
    }
  }

  &__link {
    $element: &;
    @apply underline;
  }
}
</style>
