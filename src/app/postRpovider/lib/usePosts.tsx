import {useContext} from 'react';
import {PostContext} from "@/app/postRpovider/PostProvider.tsx";

export const usePosts = () => useContext(PostContext)

