import {instance} from "@/app/api/instance/instance.ts";

export type GetPostsType = {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export const postsApi = {
  getPosts: () => {
    return instance.get<GetPostsType[]>('posts')
  }
};
