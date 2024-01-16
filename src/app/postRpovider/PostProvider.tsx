import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import marvel from "@/assets/posts/post/bcMarvel.jpg";
import hearth from "@/assets/posts/post/bcHearts.jpg";
import racing from "@/assets/posts/post/bcPost.jpg";

export const PostContext = createContext<PostContextType>({
  posts: [],
  search: '',
  setPosts: () => {
  },
  setSearch: () => {
  },
  sortedPosts: () => [],
});

export type PostsType = {
  id: string,
  title: string,
  description: string,
  data: string,
  background: string,
}
type PostContextType = {
  posts: PostsType[];
  search: string;
  setPosts: Dispatch<SetStateAction<PostsType[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
  sortedPosts: (posts: PostsType[]) => PostsType[];
}

type Props = {
  children: ReactNode
}
export const PostProvider = ({children}: Props) => {

  const [posts, setPosts] = useState<PostsType[]>([
    {
      id: '1',
      title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands',
      description: '',
      data: '10/12/23',
      background: ''
    },
    {
      id: '2',
      title: 'Marvel vs Capcom: Infinite release date set for September',
      description: '',
      data: '10/11/23',
      background: marvel
    },
    {
      id: '3',
      title: 'Hearth stone fan game imagines new classes, 300+',
      description: '',
      data: '09/01/23',
      background: hearth
    },
    {id: '4', title: 'Top 7 Best Car Racing Games for PC', description: '', data: '01/01/23', background: racing},
  ]);

  const [search, setSearch] = useState('')

  const sortedPosts = (allPosts: PostsType[]) => {
    return allPosts.filter(post => post.title.toLowerCase().includes(search))
  }

  return (
    <PostContext.Provider value={{posts, setPosts, search, setSearch, sortedPosts}}>
      {children}
    </PostContext.Provider>
  );
};

