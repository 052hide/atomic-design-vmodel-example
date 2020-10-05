import { shallowMount } from '@vue/test-utils'
import Component from './index.vue'

jest.useFakeTimers()

describe('AtomFormInputCheckbox', () => {
  describe('Props', () => {
    it('value', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          value: true,
        },
      })
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.element.checked).toBeTruthy()
    })
    it('label', () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {
        propsData: {
          label: testValue,
        },
      })
      expect(
        wrapper.find('.atom-form-input-checkbox__label--left').text()
      ).toEqual(testValue)
    })
    it('isLabelRight', () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {
        propsData: {
          label: testValue,
          isLabelRight: true,
        },
      })
      expect(
        wrapper.find('.atom-form-input-checkbox__label--right').text()
      ).toEqual(testValue)
    })
    it('isDisabled', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          isDisabled: true,
        },
      })
      const input = wrapper.find('input[type="checkbox"]')
      expect(input.attributes().disabled).toBe('disabled')
      expect(wrapper.classes()).toContain(`atom-form-input-checkbox--disabled`)
    })
  })

  describe('Triggers', () => {
    it('v-model', async () => {
      const wrapper = shallowMount(Component, {})
      const input = wrapper.find('input[type="checkbox"]')
      await input.setChecked(true)
      expect(wrapper.emitted().input[0][0]).toBeTruthy()
    })
  })
})
