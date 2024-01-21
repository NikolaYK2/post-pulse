import {instance} from "@/app/api/instance/instance.ts";

export type GetPostsType = {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export const postsApi = {
  getPosts: ({limit = 9, page = 1}) => {
    return instance.get<GetPostsType[]>('posts', {
      params: {
        _limit: limit,
        _page: page
      }
    })
  }
  // getPosts: ({limit = 9, page = 1}) => {
  //   return instance.get<GetPostsType[]>('posts', {
  //     params: {
  //       _limit: limit,
  //       _page: page
  //     }
  //   })
  // }
};
