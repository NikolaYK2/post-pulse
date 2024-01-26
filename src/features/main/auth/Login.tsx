import s from './Login.module.scss'
import {Form} from "@/features/main/profile/Form.tsx";

export const Login = () => {

  const dataForm = [
    {name:'Email'},
    {name:'Password'},
  ]
  return (
    <div className={s.container}>
      {/*<Form title={'Login'} dataForm={} callback={}/>*/}
    </div>
  );
};
