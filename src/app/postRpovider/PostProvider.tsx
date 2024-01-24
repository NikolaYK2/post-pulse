import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {GetPostsType} from "@/features/main/posts/api/postsApi.ts";

export type PaginatorType = {
  limit: number,
  page: number,
  totalCount: number
}
export type PostsType = GetPostsType & {
  [key: string]: number | string | undefined; // З
  data?: string,
  background?: string,
}
type PostContextType = {
  posts: PostsType[];
  // newPosts: PostsType[];
  pagination: PaginatorType;
  // postError: string;
  search: string;
  // isLoading: boolean;
  setPosts: Dispatch<SetStateAction<PostsType[]>>;
  setPagination: Dispatch<SetStateAction<PaginatorType>>;
  setSearch: Dispatch<SetStateAction<string>>;
  sortedPosts: (posts: PostsType[]) => PostsType[];
  // fetchPosts: () => Promise<void>;
}

export const PostContext = createContext<PostContextType>({
  posts: [],
  // newPosts:[],
  pagination: {
    totalCount: 0,
    page: 0,
    limit: 0
  },
  // postError: '',
  search: '',
  // isLoading: false,
  setPosts: () => {},
  setPagination: () => {},
  setSearch: () => {},
  sortedPosts: () => [],
  // fetchPosts: () => Promise.resolve(),
});

type Props = {
  children: ReactNode
}
export const PostProvider = ({children}: Props) => {
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState<PaginatorType>({limit: 9, page: 1, totalCount: 0});
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
  // const [newPosts, setNewPosts] = useState<PostsType[]>([])

  const sortedPosts = (allPosts: PostsType[]) => {
    return allPosts.filter(post => post.title.toLowerCase().includes(search))
  }


  // const {isLoading, postError, fetchPosts} = useFetching(async () => {
  //   const res1 = await postsApi.getPosts(pagination)
  //   setPosts(res1.data);
  //   setPagination({...pagination, totalCount: res1.headers['x-total-count']});
  //   const res2 = await postsApi.getPosts({limit:3, page:1})
  //   setNewPosts(res2.data)
  // });

  return (
    <PostContext.Provider value={{
      posts,
      // newPosts,
      // postError,
      search,
      // isLoading,
      pagination,
      setPosts,
      setSearch,
      sortedPosts,
      // fetchPosts,
      setPagination,
    }}>
      {children}
    </PostContext.Provider>
  );
};

