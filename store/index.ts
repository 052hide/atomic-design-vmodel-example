import { ActionTree } from 'vuex'
import { ActionContext } from 'vuex/types'
import { Context } from '@nuxt/types'

export const state = () => ({})
export type RootState = ReturnType<typeof state>

export const actions: ActionTree<any, any> = {
  nuxtServerInit: async (
    _context: ActionContext<RootState, RootState>,
    _server: Context
  ) => {},
}
