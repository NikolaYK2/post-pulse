import {Posts} from "@/features/main/posts/ui/Posts.tsx";
import s from './Main.module.scss'

export const Main = () => {

  return (
    <div className={s.container}>
      <Posts title={'Ost List'}/>
    </div>
  );
};
