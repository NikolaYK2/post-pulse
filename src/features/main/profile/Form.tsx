import s from './Form.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {H2} from "@/common/components/ui/h2/H2.tsx";
import {HTMLElementType, Input} from "@/common/components/ui/Input/Input.tsx";
import {ChangeEvent} from "react";

export type FormDataType = {
  title: string,
  value: string,
  as: 'input' | 'textarea',
  type: string,
  fn: (e: ChangeEvent<HTMLElementType>) => void,
}
/**
 * @property {string} title - The title of the field.
 * @property {string} value - The value of the field.
 * @property {'input' | 'textarea'} as - The type of form element.
 * @property {string} type - The input type (for example, 'text').
 * @property {(e: ChangeEvent<HTMLElementType>) => void} fn - The onChange event handler for the field.
 */
type Props = {
  dataForm: FormDataType[],
  callback: () => void
}
/**
 * The Form component takes the following props:
 * @param {FormDataType[]} dataForm - An array of objects, each describing a form field.
 * @param {() => void} callback - A function that will be called when the form is submitted.
 */
export const Form = ({callback, dataForm}: Props) => {
  return (
    <div className={s.container} onSubmit={event => event.preventDefault()}>
      <H2 title={'Provide reliable news'} side={'left'} decoration={false}/>
      <form className={s.form}>

        {dataForm.map(el => (
          <Input key={el.title} as={el.as} type={el.type} inputTitle={el.title} value={el.value} onChange={el.fn}/>
        ))}

        <BtnPoly variant={'primary'} onClick={callback}>Add Post</BtnPoly>
      </form>
    </div>
  );
};


