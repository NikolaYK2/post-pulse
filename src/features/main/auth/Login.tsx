import s from './Login.module.scss'
import {Form} from "@/common/components/ui/form/ui/Form.tsx";
import {ChangeEvent, useState} from "react";
import {HTMLElementType, PropsFormType} from "@/common/components/ui/Input/Input.tsx";
import {DecorativeBackground} from "@/common/components/ui/decorativeBackground/DecorativeBackground.tsx";
import greating from '@/assets/image/auth/login/hi.jpg'
import key from '@/assets/image/auth/login/key.jpg'
import lock from '@/assets/image/auth/login/zamok.jpg'

export const Login = () => {

  const [login, setLogin] = useState({email: '', password: ''})
  console.log(login)
  const changeEmail = (e: ChangeEvent<HTMLElementType>) => {
    setLogin({...login, email: e.currentTarget.value})
  }

  const changePassword = (e: ChangeEvent<HTMLElementType>) => {
    setLogin({...login, password: e.currentTarget.value})
  }

  const loggedIn = () => {
    setLogin({email: '', password: ''})
  }

  const dataForm: PropsFormType[] = [
    {
      title: 'Email',
      value: login.email,
      type: 'text',
      onChange: changeEmail,
    },
    {
      title: 'Password',
      value: login.password,
      type: 'password',
      onChange: changePassword,
    },
    {
      title: 'Log In',
      onClick: loggedIn,
    },
  ]

  return (
    <div className={s.container}>
      <div className={`${s.blockLogin} containerApp`}>
        <Form title={'Login'} dataForm={dataForm}/>
        <DecorativeBackground svgProps={[{name: 'dots'}, {name: 'wave'}]} imageProps={[greating, key, lock]}/>
      </div>
    </div>
  );
};
