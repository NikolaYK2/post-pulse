import {useState} from "react";

export const useFetching = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState(false)
  const [postError, setPostError] = useState('')


  const fetchPosts = async () => {
    setIsLoading(true)

    try {
      await callback()
    } catch (e: unknown) {
      if (e instanceof Error) setPostError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {isLoading, postError, fetchPosts}
};
