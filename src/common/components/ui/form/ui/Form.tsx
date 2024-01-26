import {H2} from "@/common/components/ui/h2/H2.tsx";
import {Input, PropsFormType} from "@/common/components/ui/Input/Input.tsx";
import s from './Form.module.scss'

type Props = {
  title: string,
  dataForm: PropsFormType[],
}
/**
 * The Form component takes the following props:
 * @param {Object} props - The props that the Form component takes.
 * @param {string} props.title - title form.
 * @param {PropsFormType[]} props.dataForm - An array of objects, each describing a form field.
 */
export const Form = ({dataForm, title}: Props) => {
  return (
    <div className={s.container} onSubmit={event => event.preventDefault()}>
      <H2 title={title} side={'left'} decoration={false}/>
      <form className={s.form}>

        {dataForm.map(el => (
          <Input key={el.title}
                 title={el.title}
                 type={el.type}
                 value={el.value}
                 onChange={el.onChange}
                 onClick={el.onClick}
          />
        ))}
      </form>
    </div>
  );
};


