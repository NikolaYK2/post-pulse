import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {usePosts} from "@/app/postRpovider/lib/usePosts.tsx";
import {NavLink} from "react-router-dom";
import {formattedTitle} from "@/common/utils/formattedTitle.ts";
import s from './Post.module.scss'
import bcDefault from "@/assets/image/bc/bcDefault.jpg";
import {baseUrl} from "@/main.tsx";

type Props = {
  id?: number,
  title?: string,
  data?: string,
  background?: string,
  className?: string,
}
export const Post = ({id, title, data, background, className}: Props) => {

  const {posts, setPosts} = usePosts()

  const deletePostHandle = (id?: number) => {
    setPosts(posts.filter(post => post.id !== id))
  }


  return (
    <div className={`${s.container} ${className}`}>
      <div className={s.background}>
        <img src={background || bcDefault} alt="Post background"/>
      </div>
      <div className={s.blockText}>
        <NavLink to={`${baseUrl}posts/${id}`} className={s.h2}><h2>{formattedTitle(title)}</h2></NavLink>
        <div className={s.data}>
          <p>{data}</p>
          <BtnPoly className={s.btn} onClick={() => deletePostHandle(id)}>Delete</BtnPoly>
        </div>
      </div>
    </div>
  );
};
