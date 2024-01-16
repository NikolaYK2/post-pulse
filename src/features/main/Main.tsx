import s from './Main.module.scss'
import {Outlet} from "react-router-dom";

export const Main = () => {

  return (
    <main className={s.container}>
        <Outlet/>
    </main>
  );
};
