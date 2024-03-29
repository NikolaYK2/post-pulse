import {H2} from "@/common/components/ui/h2/H2.tsx";
import {usePosts} from "@/app/postRpovider/lib/usePosts.tsx";
import {EmptyState} from "@/common/components/ui/emptyState/EmptyState.tsx";
import {useEffect, useRef, useState} from "react";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Loading} from "@/common/components/ui/loading/Loading.tsx";
import {useFetching} from "@/common/hooks/useFetching.ts";
import s from './Posts.module.scss'
import {useObserver} from "@/common/hooks/useObserver.tsx";
import {Paginator} from "@/common/components/ui/paginator/Paginator.tsx";
import {postsApi} from "@/features/2-main/posts/api/postsApi.ts";
import {NewPosts} from "@/features/2-main/posts/ui/newPosts/NewPosts.tsx";
import {SortNav} from "@/features/2-main/posts/ui/sortNav/SortNav.tsx";
import {Post} from "@/features/2-main/posts/ui/post/Post.tsx";

type Props = {
  title: string
}
export const Posts = ({title}: Props) => {


  const {posts, search, sortedPosts, setPosts, setPagination, pagination} = usePosts()

  const [allPosts, setAllPosts] = useState<PostsType[]>([])

  const lastElement = useRef<HTMLDivElement | null>(null) //go for last element

  const {postError, isLoading, fetchPosts} = useFetching(async () => {
    const res = await postsApi.getPosts(pagination)
    setPagination({...pagination, totalCount: res.headers['x-total-count']});
    setPosts([...res.data, ...posts]);
  })

  const totalCount = Math.ceil(pagination.totalCount / pagination.limit)

  useObserver(lastElement, pagination.page < totalCount, isLoading, () => {
    setPagination({...pagination, page: pagination.page + 1})
  });

  useEffect(() => {
    setAllPosts(sortedPosts(posts));
  }, [posts, search, sortedPosts]);

  useEffect(() => {
    if (!isLoading) fetchPosts().catch(e => console.error(e));
  }, [pagination.page]);


  return (
    <section className={`${s.container}`}>

      <NewPosts posts={posts}/>

      <div className={`${s.blockAllPosts} containerApp`}>
        <div className={s.item}>

          <div className={s.title}>
            <H2 title={title} side={"right"}/>
            <SortNav allPosts={allPosts} setAllPosts={setAllPosts}/>
          </div>

          {postError && <h1>Errors!!!! {postError}</h1>}


          <>{sortedPosts(allPosts).length !== 0
            ? <TransitionGroup className={s.posts}>
              {sortedPosts(allPosts).reverse().map(post => <CSSTransition key={post.id} timeout={500} classNames='app'>
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
            {isLoading && <Loading/>}

          </>

          <div className={s.lastElementPost} ref={lastElement}></div>

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
