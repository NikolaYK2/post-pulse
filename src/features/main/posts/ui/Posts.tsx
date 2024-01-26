import {Post} from "@/features/main/posts/ui/post/Post.tsx";
import {H2} from "@/common/components/ui/h2/H2.tsx";
import {usePosts} from "@/app/postRpovider/lib/usePosts.tsx";
import {EmptyState} from "@/common/components/ui/emptyState/EmptyState.tsx";
import {SortNav} from "@/features/main/posts/ui/sortNav/SortNav.tsx";
import {useEffect, useState} from "react";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import {Paginator} from "@/common/components/ui/paginator/Paginator.tsx";
import {useFetching} from "@/common/hooks/useFetching.ts";
import {postsApi} from "@/features/main/posts/api/postsApi.ts";
import {NewPosts} from "@/features/main/posts/ui/newPosts/NewPosts.tsx";
import s from './Posts.module.scss'

type Props = {
  title: string
}
export const Posts = ({title}: Props) => {

  const {posts, search, sortedPosts, setPosts, setPagination, pagination} = usePosts()
  const [allPosts, setAllPosts] = useState<PostsType[]>([])

  const {postError, isLoading, fetchPosts} = useFetching(async () => {
      const res1 = await postsApi.getPosts(pagination)
      setPosts(res1.data);
      setPagination({...pagination, totalCount: res1.headers['x-total-count']});
  })


  useEffect(() => {
    setAllPosts(sortedPosts(posts));
  }, [posts, search, sortedPosts]);


  useEffect(() => {
    fetchPosts()
  }, [pagination.page]);


  return (
    <section className={`${s.container}`}>

      <NewPosts/>

      <div className={`${s.blockAllPosts} containerApp`}>
        <div className={s.item}>
          <div className={s.title}>
            <H2 title={title} side={"right"}/>
            <SortNav allPosts={allPosts} setAllPosts={setAllPosts}/>
          </div>


          {postError && <h1>Errors!!!! {postError}</h1>}
          {isLoading ? <Loading/> :
            <>{sortedPosts(allPosts).length !== 0
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
            }</>
          }
        </div>

        <div style={{display: 'flex'}}>
          <H2/>
          <Paginator
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>

      </div>
    </section>
  );
};
