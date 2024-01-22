import s from './Post.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import bcDefault from '@/assets/posts/bc/bcDefault.jpg'
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {NavLink} from "react-router-dom";

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

  const formattedTitle = title?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className={`${s.container} ${className}`}>
      <div className={s.background}>
        <img src={background || bcDefault} alt="Post background"/>
      </div>
      <div className={s.blockText}>
        <NavLink to={'/item-post'} className={s.h2}><h2>{formattedTitle}</h2></NavLink>
        <div className={s.data}>
          <p>{data}</p>
          <BtnPoly className={s.btn} onClick={() => deletePostHandle(id)}>Delete</BtnPoly>
        </div>
      </div>
    </div>
  );
};
