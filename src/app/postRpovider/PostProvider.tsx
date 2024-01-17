import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

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
  [key: string]: number | string; // З
  id: number,
  userId: number,
  title: string,
  body: string,
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
    // {
    //   id: 11240,
    //   userId: 1231114,
    //   title: 'Jon Bernthal Joins Ghost Recon Fantacy The Wildlands',
    //   body: '',
    //   data: '10/12/23',
    //   background: ''
    // },
    // {
    //   id: 22353,
    //   userId: 2324126,
    //   title: 'Marvel vs Capcom: Infinite release date set for September',
    //   body: '',
    //   data: '10/11/23',
    //   background: marvel
    // },
    // {
    //   id: 31355,
    //   userId: 32342342,
    //   title: 'Hearth stone fan game imagines new classes, 300+',
    //   body: '',
    //   data: '09/01/23',
    //   background: hearth
    // },
    // {
    //   id: 41231,
    //   userId: 423423423,
    //   title: 'Top 7 Best Car Racing Games for PC',
    //   body: '',
    //   data: '01/01/23',
    //   background: racing
    // },
  ]);

  const sortedPosts = (allPosts: PostsType[]) => {
    return allPosts.filter(post => post.title.toLowerCase().includes(search))
  }

  const [search, setSearch] = useState('');

  return (
    <PostContext.Provider value={{posts, setPosts, search, setSearch, sortedPosts,}}>
      {children}
    </PostContext.Provider>
  );
};

