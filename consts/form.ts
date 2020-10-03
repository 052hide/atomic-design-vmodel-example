// 制限がないものにも常識的な最大文字数を設定する
const NormalStringMaxLength = 500 as const
// const LongStringMaxLength = 10000 as const

export const auth = {
  name: {
    validation: `required|min:2|max:30`,
  },
  email: {
    validation: `required|email|max:${NormalStringMaxLength}`,
  },
  password: {
    validation: `required|containLowercase|containUppercase|containNumeric|min:8|max:${NormalStringMaxLength}`,
  },
}
