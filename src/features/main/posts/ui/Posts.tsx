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
    if (index > posts.length) {
      return null
    }
    return posts[posts.length - index]
  }

  const post1 = getPost(1);
  const post2 = getPost(2);
  const post3 = getPost(3);

  return (
    <section className={`${s.container}`}>
      <div className={`${s.blockNewPosts}`}>
        <div className={`${s.postOne} containerApp`}>
          <Post id={post1?.id} title={post1?.title} data={post1?.data} background={post1?.background}/>
          <div className={s.postTwo}>
            <Post id={post2?.id} title={post2?.title} data={post2?.data} background={post2?.background}/>
            <Post id={post3?.id} title={post3?.title} data={post3?.data} background={post3?.background}/>
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
            {posts.map(post => <Post key={post.id} id={post.id} title={post.title} data={post.data}
                                     background={post.background} className={s.post}/>)}
          </div>

        </div>
      </div>
    </section>
  );
};
