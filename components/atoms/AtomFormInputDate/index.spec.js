import { shallowMount } from '@vue/test-utils'
import Component from './index.vue'

jest.useFakeTimers()

describe('AtomFormInputDate', () => {
  describe('Props', () => {
    it('value', () => {
      const testValue = '2020-03-10'
      const wrapper = shallowMount(Component, {
        propsData: {
          value: testValue,
        },
      })
      const input = wrapper.find('input[type="date"]')
      expect(input.props().value).toBe(testValue)
    })
    it('width', () => {
      const testValue = 'sm'
      const wrapper = shallowMount(Component, {
        propsData: {
          width: testValue,
        },
      })
      expect(wrapper.classes()).toContain(
        `atom-form-input-date--width-${testValue}`
      )
    })
    it('isDisabled', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          isDisabled: true,
        },
      })
      expect(wrapper.attributes().disabled).toBe('disabled')
    })
  })

  describe('Triggers', () => {
    it('v-model', async () => {
      const testValue = '2020-03-10'
      const wrapper = shallowMount(Component, {})
      const input = wrapper.find('input[type="date"]')
      await input.setValue(testValue)
      expect(wrapper.emitted().input[0][0]).toBe(testValue)
    })
  })
})
