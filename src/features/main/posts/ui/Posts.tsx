import {Post} from "@/features/main/posts/ui/post/Post.tsx";
import {H2} from "@/common/components/ui/h2/H2.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {EmptyState} from "@/common/components/ui/emptyState/EmptyState.tsx";
import {SortNav} from "@/features/main/posts/ui/sortNav/SortNav.tsx";
import {useEffect, useState} from "react";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import s from './Posts.module.scss'
import {postsApi} from "@/features/main/posts/api/postsApi.ts";

type Props = {
  title: string
}
export const Posts = ({title}: Props) => {

  const {posts, sortedPosts, search, setPosts} = usePosts()
  const [allPosts, setAllPosts] = useState<PostsType[]>([])

  const getPost = (index: number) => {
    if (index > posts.length) {
      return null
    }
    return posts[posts.length - index]
  }

  const post1 = getPost(1);
  const post2 = getPost(2);
  const post3 = getPost(3);

  useEffect(() => {
    setAllPosts(sortedPosts(posts));
  }, [posts, search, sortedPosts]);

  console.log(posts)
  const sld = async ()=>{
    const res = await postsApi.getPosts()
    setPosts(res.data)
  }
  return (
    <section className={`${s.container}`}>
      <div className={`${s.blockNewPosts}`}>
        <div className={`${s.postOne} containerApp`}>
          <Post id={post1?.userId} title={post1?.title} data={post1?.data} background={post1?.background}/>
          <div className={s.postTwo}>
            <Post id={post2?.userId} title={post2?.title} data={post2?.data} background={post2?.background}/>
            <Post id={post3?.userId} title={post3?.title} data={post3?.data} background={post3?.background}/>
          </div>
        </div>
      </div>

      <div className={`${s.blockAllPosts} containerApp`}>
        <div className={s.item}>
          <div className={s.title}>
            <H2 title={title} side={"right"}/>

            <div className={s.decoration}>
              <SortNav allPosts={allPosts} setAllPosts={setAllPosts}/>
            </div>

          </div>

          {sortedPosts(allPosts).length !== 0
            ? <TransitionGroup className={s.posts}>
              {sortedPosts(allPosts).map(post => <CSSTransition key={post.id}
                                                                timeout={500}
                                                                classNames='app'>
                  <Post id={post.id}
                        title={post.title}
                        data={post.data}
                        background={post.background}
                        className={s.post}/>
                </CSSTransition>
              )}
            </TransitionGroup>

            : <EmptyState title={'No Posts'}/>
          }
          <button onClick={sld}>ADD</button>
        </div>
      </div>
    </section>
  );
};
