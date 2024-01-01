import s from './Post.module.scss'
import {BtnPoly} from "@/common/components/btnPoly/BtnPoly.tsx";


type Props = {
  title: string,
  data:string,
}
export const Post = ({title, data}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.blockText}>
        <h2>{title}</h2>
        <div className={s.data}>
          <p>{data}</p>
          <BtnPoly className={s.btn}>Delete</BtnPoly>
        </div>
      </div>
    </div>
  );
};
