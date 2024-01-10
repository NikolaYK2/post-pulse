import s from './Main.module.scss'
import {Outlet} from "react-router-dom";
import {PostProvider} from "@/app/postRpovider/PostProvider.tsx";

export const Main = () => {

  return (
    <main className={s.container}>
      <PostProvider>
        <Outlet/>
      </PostProvider>
    </main>
  );
};
