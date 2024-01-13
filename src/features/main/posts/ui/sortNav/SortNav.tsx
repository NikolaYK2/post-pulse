import s from './SortNav.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {useState} from "react";

type Props = {
  allPosts: PostsType[]
  setAllPosts: (posts: PostsType[]) => void
}
export const SortNav = ({allPosts, setAllPosts}: Props) => {
  const [isSorted, setIsSorted] = useState(false)
  const {posts} = usePosts()

  const sortArr = ['default', 'data', 'title',]


  const sortHandle = (el: string) => {
    if (el === 'data') {
      if (isSorted) {
        setAllPosts([...allPosts].sort((a, b) => a.data.localeCompare(b.data)))
      } else {
        setAllPosts([...allPosts].sort((a, b) => b.data.localeCompare(a.data)))
      }
    }

    if (el === 'title') setAllPosts([...allPosts].sort((a, b) => a.title.localeCompare(b.title)))
    if (el === 'default') setAllPosts(posts)
    setIsSorted(!isSorted);

  }

  return (
    <nav className={s.container}>
      <ul className={s.blockItem}>
        {sortArr.map(el => <li key={el}>
          <BtnPoly className={s.btn} onClick={() => sortHandle(el)}>
            {el}
          </BtnPoly>
        </li>)}
      </ul>
    </nav>
  );
};
