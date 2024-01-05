import {useState} from "react";
import {Post} from "@/features/main/posts/ui/post/Post.tsx";
import s from './Posts.module.scss'
import marvel from '@/assets/posts/post/bcMarvel.jpg'
import hearth from '@/assets/posts/post/bcHearts.jpg'
import racing from '@/assets/posts/post/bcPost.jpg'


export type PostsType = {
  id: string,
  title: string,
  data: string,
  background: string,
}

type Props = {
  title: string
}
export const Posts = ({title}: Props) => {

  const [posts, setPosts] = useState<PostsType[]>([
    {id: '1', title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands', data: '10/12/23', background: ''},
    {id: '2', title: 'Marvel vs Capcom: Infinite release date set for September', data: '10/11/23', background: marvel},
    {id: '3', title: 'Hearth stone fan game imagines new classes, 300+', data: '09/01/23', background: hearth},
    {id: '4', title: 'Top 7 Best Car Racing Games for PC', data: '01/01/23', background: racing},
  ])


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
            <h2>{title}</h2>
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
