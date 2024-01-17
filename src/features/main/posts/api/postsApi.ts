import {instance} from "@/app/api/instance/instance.ts";


export const postsApi = {
  getPosts: () => {
    return instance.get('posts')
  }
};
