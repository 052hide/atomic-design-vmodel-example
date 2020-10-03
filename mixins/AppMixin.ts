import { Component, Vue } from 'nuxt-property-decorator'
import * as consts from '~/consts'
import * as utils from '~/utils'

@Component
export default class AppMixin extends Vue {
  get Consts() {
    return consts
  }

  get Utils() {
    return utils
  }
}
