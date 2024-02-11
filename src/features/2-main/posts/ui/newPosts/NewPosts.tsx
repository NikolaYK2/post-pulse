import {useEffect, useState} from "react";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {useFetching} from "@/common/hooks/useFetching.ts";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import s from "./NewPosts.module.scss";
import {postsApi} from "@/features/2-main/posts/api/postsApi.ts";
import {Post} from "@/features/2-main/posts/ui/post/Post.tsx";

type Props = {
  posts: PostsType[]
}
export const NewPosts = ({posts}: Props) => {

  const [newPosts, setNewPosts] = useState<PostsType[]>([])

  const {isLoading} = useFetching(async () => {
    const res = await postsApi.getPosts({limit: 3, page: 1})
  })
  const post1 = newPosts[newPosts.length - 1];
  const post2 = newPosts[newPosts.length - 2];
  const post3 = newPosts[newPosts.length - 3];

  useEffect(() => {
    setNewPosts(posts)
  }, [posts]);

  return (
    <div className={`${s.blockNewPosts} paddingApp`}>
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
