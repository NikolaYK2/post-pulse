import s from './BtnPoly.module.scss'
import {ElementType, ComponentPropsWithoutRef} from "react";


export type VariantType = 'link' | 'primary' | 'secondary' | 'tertiary' | 'input'| 'textarea'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T,
  className?: string,
  item?: string, // добавлено для отображения картинки
  fullWidth?: boolean,
  variant?: VariantType,
} & ComponentPropsWithoutRef<T>

export const BtnPoly = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> // исправлено имя типа
) => {
  const {as: Component = 'button', className, fullWidth, variant = 'primary', ...rest} = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}/>
  )
}
