<template>
  <div class="page">
    <ul class="menu">
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/basic" class="menu__link"
          >v-model基礎</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/component/atoms" class="menu__link"
          >Atomコンポーネントでv-modelの使い方</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/component/more" class="menu__link"
          >Atom以外のコンポーネントでv-modelの使い方</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/number" class="menu__link"
          >v-modelで数値を扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/date" class="menu__link"
          >v-modelで日付を扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/v-model/object" class="menu__link"
          >v-modelで複数のデータを扱う</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/prop-sync" class="menu__link"
          >PropSync</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/prop-sync/object" class="menu__link"
          >PropSync (objectを扱う)</nuxt-link
        >
      </li>
      <li class="menu__item">
        <nuxt-link to="/samples/prop-sync/multi" class="menu__link"
          >PropSync (複数のデータを扱う)</nuxt-link
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
