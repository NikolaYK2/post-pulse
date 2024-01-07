import s from './Form.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {H2} from "@/common/components/ui/h2/H2.tsx";


export const Form = () => {


  return (
    <div className={s.container}>
      <H2 title={'Provide reliable news'} side={'left'}/>
      <form className={s.form}>
        <label className={s.input}>
          <span>Post title</span>
          <input type="text"/>
        </label>
        <label className={s.textarea}>
          <span>Post Description</span>
          <textarea/>
        </label>
        <BtnPoly variant={'primary'}>Add Post</BtnPoly>
      </form>
    </div>
  );
};

