import s from './Main.module.scss'
import {Outlet, useNavigate} from "react-router-dom";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";
import {useEffect} from "react";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";

export const Main = () => {

  const {isLogged, isLoading, setIsLoading} = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
    setIsLoading(false)
  }, [isLogged, navigate, setIsLoading]);

  if (isLoading) {
    return <Loading/>
  }

  if (isLoading) {
    return <Loading/>
  }


  return (
    <main className={s.container}>
      <Outlet/>
    </main>
  );
};
