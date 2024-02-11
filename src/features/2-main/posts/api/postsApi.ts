import {instance} from "@/app/api/instance/instance.ts";

export type GetPostsType = {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export type PostCommentsType = Omit<GetPostsType, 'title'> & { name: string, email: string }

export const postsApi = {
  getPosts: ({limit = 9, page = 1}) => {
    return instance.get<GetPostsType[]>('posts', {
      params: {
        _limit: limit,
        _page: page
      }
    })
  },
  getPost: (id: string) => {
    return instance.get<GetPostsType>(`posts/${id}`)
  },
  addPost: (data: GetPostsType) => {
    return instance.post<GetPostsType>(`posts`, data)
  },
  getPostComments: (id: string) => {
    return instance.get<PostCommentsType[]>(`posts/${id}/comments`)
  },
};
