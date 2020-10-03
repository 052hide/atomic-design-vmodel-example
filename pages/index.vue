<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import AppMixin from '~/mixins/AppMixin'

@Component
export default class PageIndex extends mixins(AppMixin) {}
</script>

<style lang="scss" scoped></style>
