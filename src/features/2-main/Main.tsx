import s from './Main.module.scss'
import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";
import {useEffect} from "react";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import {baseUrl} from "@/main.tsx";
import cat from '@/assets/image/app/cat.png'
import {Login} from "@/features/2-main/auth/Login.tsx";

export const Main = () => {
  const isNestedRoute = location.pathname !== '/post-pulse/';

  const {isLogged, isLoadingAuth, setIsLoadingAuth} = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate(`${baseUrl}login`);
    }
    setIsLoadingAuth(false)
  }, [isLogged, navigate, setIsLoadingAuth]);

  if (isLoadingAuth) {
    return <Loading/>
  }

  return (
    <main className={s.container}>
      {!isNestedRoute &&
          <>
      <div className={`${s.bc1}`}>
        <img className={`${s.img}`} src={cat} alt=""/>
      </div>
      <div className={`${s.s}`}></div>
          </>
      }
      {isLogged ? <Outlet/> : <Login/>}
    </main>
  );
};
