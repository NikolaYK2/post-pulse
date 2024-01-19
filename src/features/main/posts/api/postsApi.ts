import {instance} from "@/app/api/instance/instance.ts";

export type GetPostsType = {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export const postsApi = {
  getPosts: ({_limit = 10, _page = 1}) => {
    return instance.get<GetPostsType[]>('posts', {
      params:{
        _limit,
        _page
      }
    })
  }
};
