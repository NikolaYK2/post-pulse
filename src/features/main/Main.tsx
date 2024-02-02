import s from './Main.module.scss'
import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";
import {useEffect} from "react";

export const Main = () => {

  const {isLogged} = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    } else {
      navigate('/posts')
    }
  }, [isLogged, navigate]);

  return (
    <main className={s.container}>
      <Outlet/>
    </main>
  );
};
