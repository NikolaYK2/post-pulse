import {useEffect, useState} from "react";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {useFetching} from "@/common/hooks/useFetching.ts";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import s from "./NewPosts.module.scss";
import {postsApi} from "@/features/2-main/posts/api/postsApi.ts";
import {Post} from "@/features/2-main/posts/ui/post/Post.tsx";

export const NewPosts = () => {

  const [newPosts, setNewPosts] = useState<PostsType[]>([])

  const {isLoading, fetchPosts} = useFetching(async () => {
    const res2 = await postsApi.getPosts({limit: 3, page: 1})
    setNewPosts(res2.data)
  })
  const post1 = newPosts[0];
  const post2 = newPosts[1];
  const post3 = newPosts[2];

  useEffect(() => {
    fetchPosts()
  }, []);


  return (
    <div className={`${s.blockNewPosts}`}>
      {isLoading
        ?
        <Loading/>
        :
        <div className={`${s.postOne} containerApp`}>
          <Post id={post1?.id} title={post1?.title} data={post1?.data} background={post1?.background}/>
          <div className={s.postTwo}>
            <Post id={post2?.id} title={post2?.title} data={post2?.data} background={post2?.background}/>
            <Post id={post3?.id} title={post3?.title} data={post3?.data} background={post3?.background}/>
          </div>
        </div>
      }
    </div>
  );
};
