import {Post} from "@/features/main/posts/ui/post/Post.tsx";
import s from './Posts.module.scss'
import {H2} from "@/common/components/ui/h2/H2.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";


type Props = {
  title: string
}
export const Posts = ({title}: Props) => {

  const {posts} = usePosts()

  const getPost = (index: number) => {
    return posts[posts.length - index]
  }


  return (
    <section className={`${s.container}`}>
      <div className={`${s.blockNewPosts}`}>
        <div className={`${s.postOne} containerApp`}>
          <Post title={getPost(1).title} data={getPost(1).data} background={getPost(1).background}/>
          <div className={s.postTwo}>
            <Post title={getPost(2).title} data={getPost(2).data} background={getPost(2).background}/>
            <Post title={getPost(3).title} data={getPost(3).data} background={getPost(3).background}/>
          </div>
        </div>
      </div>
      <div className={`${s.blockAllPosts} containerApp`}>
        <div className={s.item}>
          <div className={s.title}>
            <H2 title={title} side={"right"}/>
            <div className={s.decoration}>
              <div>add</div>
            </div>
          </div>
          <div className={s.posts}>
            {posts.map(post => <Post key={post.id} title={post.title} data={post.data}
                                     background={post.background} className={s.post}/>)}
          </div>

        </div>
      </div>
    </section>
  );
};
