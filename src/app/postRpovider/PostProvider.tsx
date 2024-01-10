import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import marvel from "@/assets/posts/post/bcMarvel.jpg";
import hearth from "@/assets/posts/post/bcHearts.jpg";
import racing from "@/assets/posts/post/bcPost.jpg";

export const PostContext = createContext<PostContextType>({posts:[], setPosts:()=>{}});

export type PostsType = {
  id: string,
  title: string,
  data: string,
  background: string,
}
type PostContextType = {
  posts: PostsType[];
  setPosts: Dispatch<SetStateAction<PostsType[]>>;
}

type Props = {
  children: ReactNode
}
export const PostProvider = ({children}: Props) => {

  const [posts, setPosts] = useState<PostsType[]>([
    {id: '1', title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands', data: '10/12/23', background: ''},
    {id: '2', title: 'Marvel vs Capcom: Infinite release date set for September', data: '10/11/23', background: marvel},
    {id: '3', title: 'Hearth stone fan game imagines new classes, 300+', data: '09/01/23', background: hearth},
    {id: '4', title: 'Top 7 Best Car Racing Games for PC', data: '01/01/23', background: racing},

  ]);

  return (
    <PostContext.Provider value={{posts, setPosts}}>
      {children}
    </PostContext.Provider>
  );
};

