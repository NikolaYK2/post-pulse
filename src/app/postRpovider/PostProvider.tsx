import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {GetPostsType, postsApi} from "@/features/main/posts/api/postsApi.ts";
import {useFetching} from "@/common/hooks/useFetching.ts";


export type PostsType = GetPostsType & {
  [key: string]: number | string | undefined; // З
  data?: string,
  background?: string,
}
type PostContextType = {
  posts: PostsType[];
  postError: string,
  search: string;
  isLoading: boolean;
  setPosts: Dispatch<SetStateAction<PostsType[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
  sortedPosts: (posts: PostsType[]) => PostsType[];
  fetchPosts: () => Promise<void>,
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  postError: '',
  search: '',
  isLoading: false,
  setPosts: () => {
  },
  setSearch: () => {
  },
  sortedPosts: () => [],
  fetchPosts: () => Promise.resolve()
});

type Props = {
  children: ReactNode
}
export const PostProvider = ({children}: Props) => {
  const [search, setSearch] = useState('');

  const {isLoading, postError, fetchPosts} = useFetching(async () => {
    const res = await postsApi.getPosts()
    setPosts(res.data)
  });

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


  return (
    <PostContext.Provider value={{
      posts,
      postError,
      search,
      isLoading,
      setPosts,
      setSearch,
      sortedPosts,
      fetchPosts
    }}>
      {children}
    </PostContext.Provider>
  );
};

