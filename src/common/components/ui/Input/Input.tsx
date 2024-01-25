import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {ChangeEvent, ElementType} from "react";
import s from './Input.module.scss'


export type HTMLElementType =
  | HTMLInputElement
  | HTMLTextAreaElement

type Props = {
  as: ElementType,
  type?: string,
  inputTitle: string
  value: string,
  onChange: (e: ChangeEvent<HTMLElementType>) => void
}
export const Input = ({value, onChange, type, as, inputTitle}: Props) => {

  return (
    <label className={s.input}>
      <span>{inputTitle}</span>
      <BtnPoly className={s.teg} as={as} type={type} variant={"input"} value={value} onChange={onChange}/>
    </label>
  );
};

