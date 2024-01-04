import {Posts} from "@/features/main/posts/ui/Posts.tsx";
import s from './Main.module.scss'

export const Main = () => {

  return (
    <main className={s.container}>
      <Posts title={'Ost List'}/>
    </main>
  );
};
