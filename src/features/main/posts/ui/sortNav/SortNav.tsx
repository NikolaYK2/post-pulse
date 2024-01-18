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

  const {posts, setSearch, search} = usePosts()
  const [sortArr, setSortArr] = useState([
    {name: 'default', isActive: true},
    {name: 'body', isActive: false},
    {name: 'title', isActive: false},])


  const sortHandle = (filter: string) => {
    if (filter !== 'default') {
      setAllPosts([...allPosts.map(e => e)].sort((a, b) => isSorted
        ? String(a[filter]).localeCompare(String(b[filter]))
        : String(b[filter]).localeCompare(String(a[filter]))))
    } else {
      if (search !== '') setSearch('')
      setAllPosts(posts)
    }
    setSortArr(sortArr.map(el => el.name === filter ? {...el, isActive: true} : {...el, isActive: false}))
    setIsSorted(!isSorted)
  }

  return (
    <nav className={s.container}>
      <ul className={s.blockItem}>
        {sortArr.map(el =>
          <BtnPoly key={el.name}
                   className={`${s.btn} ${el.isActive ? s.isActive : ''}`}
                   onClick={() => sortHandle(el.name)}>
            {el.name}
          </BtnPoly>
        )}
      </ul>
    </nav>
  );
};
