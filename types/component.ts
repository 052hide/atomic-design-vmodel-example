export type Theme = 'primary' | 'secondary' | 'secondary-yellow' | 'transparent'
export type ButtonSize = 'sm' | 'base' | 'lg'
export type ButtonWidth = 'auto' | 'sm' | 'base' | 'lg' | 'full'
export type InputWidth = 'sm' | 'base' | 'lg' | 'full'
export type Round = 'none' | 'sm' | 'base' | 'lg' | 'full'
export type FormInputTextType = 'text' | 'search' | 'tel' | 'url' | 'password'
export type FormInputDatePeriodValue = {
  start: string
  end: string
}
export type FormOption = {
  value: boolean | number | string
  label: string
}
export type ImageSrcset = {
  default: string
  webp?: string
  avif?: string
}

export type ValidationMode = 'passive' | 'aggressive'

export type ModalComponentName = 'ModalMessage'

export type ModalMessage = {
  title: string
  contents: string[]
}
