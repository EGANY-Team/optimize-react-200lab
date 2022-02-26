import { ChangeEvent } from 'react'

type Props = {
  id?: string
  className?: string
  value?: string
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({ className, ...otherProps }: Props) => {
  const _className = 'db w-100 input-reset pa2 ba b--black-10 br2'
    .concat(' ')
    .concat(className ?? '')
    .trim()

  return <input className={_className} type="text" {...otherProps} />
}

export default CustomInput
