import { ComponentType } from '~/types'

export const defaultValue: {
  theme: ComponentType.Theme
  round: 'none'
  buttonSize: ComponentType.ButtonSize
  buttonWidth: ComponentType.ButtonWidth
  formInputWidth: ComponentType.InputWidth
  formInputTextType: 'text'
  formInputDateValue: string
  formInputDatePeriodValue: {
    start: string
    end: string
  }
  formValidationMode: ComponentType.ValidationMode
} = {
  theme: 'secondary',
  round: 'none',
  buttonSize: 'base',
  buttonWidth: 'base',
  formInputWidth: 'base',
  formInputTextType: 'text',
  formInputDateValue: new Date().toISOString().substr(0, 10),
  formInputDatePeriodValue: {
    start: new Date().toISOString().substr(0, 10),
    end: new Date().toISOString().substr(0, 10),
  },
  formValidationMode: 'passive',
}
