import s from './Post.module.scss'
import {BtnPoly} from "@/common/components/btnPoly/BtnPoly.tsx";
import bcDefault from '@/assets/posts/bc/bcDefault.jpg'

type Props = {
  title: string,
  data: string,
  background?: string
}
export const Post = ({title, data, background}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.background}>
        <img src={background || bcDefault} alt=""/>
      </div>
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
