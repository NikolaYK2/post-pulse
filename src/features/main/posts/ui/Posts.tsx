import {useState} from "react";
import {Post} from "@/features/post/Post.tsx";
import s from './Posts.module.scss'

export type PostsType = {
  id: string,
  title: string,
  data: string,
}

type Props = {
  title: string
}
export const Posts = ({title}: Props) => {

  const [posts, setPosts] = useState<PostsType[]>([
    {id: '1', title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands', data: '10/12/23'},
    {id: '2', title: 'Marvel vs Capcom: Infinite release date set for September', data: '10/11/23'},
    {id: '3', title: 'Hearth stone fan game imagines new classes, 300+', data: '09/01/23'},
    {id: '4', title: 'Top 7 Best Car Racing Games for PC', data: '01/01/23'},
  ])

  const getKeyPosts = (index: number) => {
    return posts.length - index
  }

  return (
    <section className={s.container}>
      <div className={s.blockNewPosts}>
        <div className={s.postOne}>
          <Post title={posts[getKeyPosts(1)].title} data={posts[getKeyPosts(1)].data}/>
          <div className={s.postTwo}>
            <Post title={posts[getKeyPosts(2)].title} data={posts[getKeyPosts(2)].data}/>
            <Post title={posts[getKeyPosts(3)].title} data={posts[getKeyPosts(3)].data}/>
          </div>
        </div>
      </div>
      <div className={s.title}>
        <h2>{title}</h2>
        {posts.map(post => <Post key={post.id} title={post.title} data={post.data}/>)}
      </div>
    </section>
  );
};
