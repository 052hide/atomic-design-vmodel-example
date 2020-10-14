import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import ja from 'vee-validate/dist/locale/ja.json'

const messageEn = {
  ...en.messages,
  containLowercase:
    'The {_field_} field must contain at least 1 lowercase alphabetical character',
  containUppercase:
    'The {_field_} field must contain at least 1 uppercase alphabetical character',
  containNumeric:
    'The {_field_} field must contain at least 1 numeric character',
}

const messageJa = {
  ...ja.messages,
  containLowercase: '{_field_}は1文字以上のアルファベット小文字が必要です',
  containUppercase: '{_field_}は1文字以上のアルファベット大文字が必要です',
  containNumeric: '{_field_}は1文字以上の数字が必要です',
}

for (const [rule, validation] of Object.entries(rules)) {
  // @ts-ignore
  extend(rule, {
    ...validation,
  })
}

extend('containLowercase', {
  validate: (value) => {
    return new RegExp(/(?=.*[a-z])/).test(value)
  },
})
extend('containUppercase', {
  validate: (value) => {
    return new RegExp(/(?=.*[A-Z])/).test(value)
  },
})
extend('containNumeric', {
  validate: (value) => {
    return new RegExp(/(?=.*[0-9])/).test(value)
  },
})

localize({
  en: {
    messages: messageEn,
  },
  ja: {
    messages: messageJa,
  },
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
