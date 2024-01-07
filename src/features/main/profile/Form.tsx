import s from './Form.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";


export const Form = () => {


  return (
    <div className={s.container}>
      <h2 className={'h2'}>Provide reliable news</h2>
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

