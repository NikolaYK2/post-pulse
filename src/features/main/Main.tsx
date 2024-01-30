import s from './Main.module.scss'
import {Outlet} from "react-router-dom";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";
import {Login} from "@/features/main/auth/Login.tsx";

export const Main = () => {

  const {isLogged} = useAuth()


  return (
    <main className={s.container}>
      {isLogged
        ?
        <Outlet/>
        :
        <Login/>
      }
    </main>
  );
};
