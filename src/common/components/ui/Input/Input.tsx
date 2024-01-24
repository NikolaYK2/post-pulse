import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {ChangeEvent, ElementType} from "react";
import s from './Input.module.scss'


type InputElementType =
  | HTMLInputElement
  | HTMLTextAreaElement

type Props<T> = {
  type?: string,
  as: ElementType,
  inputTitle: string
  data: string,
  onChange: (e: ChangeEvent<T>) => void
}
export const Input = <T extends InputElementType>({
                                                    data,
                                                    onChange,
                                                    type,
                                                    as,
                                                    inputTitle
                                                  }: Props<T>) => {

  return (
    <label className={s.input}>
      <span>{inputTitle}</span>
      <BtnPoly className={s.teg} as={as} type={type} variant={"input"} value={data} onChange={onChange}/>
    </label>
  );
};
