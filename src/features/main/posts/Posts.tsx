import {useState} from "react";
import {Post} from "@/features/post/Post.tsx";

export type PostsType ={
  id:string,
  title:string,
  data:string,
}
export const Posts = () => {

  const [posts, setPosts] = useState<PostsType[]>([
    {id: '1', title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands', data: '10/12/23'},
    {id: '2', title: 'Marvel vs Capcom: Infinite release date set for September', data: '10/11/23'},
    {id: '3', title: 'Hearth stone fan game imagines new classes, 300+', data: '09/01/23'},
    {id: '4', title: 'Top 7 Best Car Racing Games for PC', data: '01/01/23'},
  ])

  return (
    <div>
      {posts.map(post => <Post key={post.id} title={post.title} data={post.data}/>)}
    </div>
  );
};
