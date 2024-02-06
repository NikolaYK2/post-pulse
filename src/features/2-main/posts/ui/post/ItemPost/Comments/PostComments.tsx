import {H2} from "@/common/components/ui/h2/H2.tsx";
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import {useFetching} from "@/common/hooks/useFetching.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import s from './PostComments.module.scss'
import {PostCommentsType, postsApi} from "@/features/2-main/posts/api/postsApi.ts";

export const PostComments = () => {
  const [comments, setComments] = useState<PostCommentsType[] | null>(null);
  console.log(comments)
  const {id} = useParams<{ id: string }>();

  const {isLoading, fetchPosts} = useFetching(async () => {
    const res2 = await postsApi.getPostComments(id!)
    setComments(res2.data)
  })

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className={`${s.container}`}>
      <div className={`${s.blockItem} containerApp`}>
        <H2 title={'Comments'} side={"right"}/>

        {isLoading
          ?
          <Loading/>
          :
          <div className={s.blockComments}>
            {comments?.map(comment => <div key={comment.id} className={s.comment}>
                <h3>{comment.email}</h3>
                <p>{comment.body}</p>
              </div>
            )}
          </div>}
      </div>
    </div>

  );
};
