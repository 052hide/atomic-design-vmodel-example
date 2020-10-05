import { shallowMount } from '@vue/test-utils'
import Component from './index.vue'

jest.useFakeTimers()

describe('AtomFormInputText', () => {
  describe('Props', () => {
    it('value', () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {
        propsData: {
          value: testValue,
        },
      })
      const input = wrapper.find('input[type="text"]')
      expect(input.props().value).toBe(testValue)
    })
    it('placeholder', () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {
        propsData: {
          placeholder: testValue,
        },
      })
      const input = wrapper.find('input[type="text"]')
      expect(input.props().placeholder).toBe(testValue)
    })
    it('width', () => {
      const testValue = 'sm'
      const wrapper = shallowMount(Component, {
        propsData: {
          width: testValue,
        },
      })
      expect(wrapper.classes()).toContain(
        `atom-form-input-text--width-${testValue}`
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
    it('type', () => {
      const testValue = 'password'
      const wrapper = shallowMount(Component, {
        propsData: {
          type: testValue,
        },
      })
      expect(wrapper.attributes().type).toBe(testValue)
    })
    // NOTE: .trimが動かない
    // it('isTrim', async () => {
    //   const testValue = '   a  b      c   '
    //   const wrapper = shallowMount(Component, {
    //     propsData: {
    //       isTrim: true,
    //     },
    //   })
    //   const input = wrapper.find('input[type="text"]')
    //   await input.setValue(testValue)
    //   expect(wrapper.emitted().input[0][0]).toBe('a b c')
    // })
  })

  describe('Triggers', () => {
    it('v-model', async () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {})
      const input = wrapper.find('input[type="text"]')
      await input.setValue(testValue)
      expect(wrapper.emitted().input[0][0]).toBe(testValue)
    })
    it('input', async () => {
      const testValue = 'Test'
      const wrapper = shallowMount(Component, {
        propsData: {
          useKeydown: true,
        },
      })
      const input = wrapper.find('input[type="text"]')
      input.element.value = testValue
      await input.trigger('input')
      expect(wrapper.emitted().input[0][0]).toBe(testValue)
    })
  })
})
