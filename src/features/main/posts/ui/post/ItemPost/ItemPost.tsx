import {useFetching} from "@/common/hooks/useFetching.ts";
import {GetPostsType, postsApi} from "@/features/main/posts/api/postsApi.ts";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import {formattedTitle} from "@/common/utils/formattedTitle.ts";
import bcDefault from '@/assets/posts/bc/bcDefault.jpg'
import s from './ItemPost.module.scss'


export const ItemPost = () => {
  const [post, setPost] = useState<GetPostsType | null>(null);

  const {id} = useParams<{ id: string }>();

  const {fetchPosts, isLoading, postError} = useFetching(async () => {
    const res = await postsApi.getPost(id!)
    setPost(res.data)
  });

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className={s.container}>
      {postError ? postError : ''}
      {isLoading
        ?
        <Loading/>
        :
        <div className={`containerApp ${s.block}`}>
          <h2>{formattedTitle(post?.title)}</h2>
          <div className={s.blockImg}>
            <div className={s.img}>
              <img src={bcDefault} alt="Post backraund"/>
            </div>
          </div>
          <div className={s.item}>
            <p>{post?.body}</p>
          </div>
        </div>
      }
    </div>
  );
};
