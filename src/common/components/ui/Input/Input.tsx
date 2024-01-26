import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {ChangeEvent} from "react";
import s from './Input.module.scss'


export type HTMLElementType =
  | HTMLInputElement
  | HTMLTextAreaElement

type InputType = 'text' | 'textarea' | 'password' | undefined

export type PropsFormType = {
  title: string
  type?: InputType,
  value?: string | number,
  onChange?: (e: ChangeEvent<HTMLElementType>) => void
  onClick?: () => void
}
/**
 * @param {Object} props - The props that the Form component takes.
 * @param {string} props.title - The title of the field.
 * @param {string} props.value - The value of the field.
 * @param {string} props.type - The input type (for example, 'text').
 * @param {(e: ChangeEvent<HTMLElementType>) => void} props.onChange - The onChange event handler for the field.
 * @param {() => void} props.onClick - The onChange event handler for the field.
 */
export const Input = ({value, onChange, type, title, onClick}: PropsFormType) => {

  const typeMapping = {
    text: 'input',
    textarea: 'textarea',
    password: 'input',
  } as const;

  const typeElement = type ? typeMapping[type] : 'button';
  const variantElement = type ? typeMapping[type] : undefined;

  if (typeElement === 'button') {
    return <BtnPoly as={typeElement} onClick={onClick}>{title}</BtnPoly>
  }

  return (
    <label className={s.input}>
      <span>{title}</span>
      <BtnPoly className={s.teg}
               variant={variantElement}
               as={typeElement}
               type={type}
               value={value}
               onChange={onChange}
               autoComplete={type === 'password' ? 'current-password' : 'on'}
      />
    </label>
  );
};

