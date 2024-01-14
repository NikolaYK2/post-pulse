import s from './SortNav.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {PostsType} from "@/app/postRpovider/PostProvider.tsx";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {useState} from "react";

type SortFunction = {
  [key: string]: () => void;
};
type Props = {
  allPosts: PostsType[]
  setAllPosts: (posts: PostsType[]) => void
}
export const SortNav = ({allPosts, setAllPosts}: Props) => {
  const [isSorted, setIsSorted] = useState(false)

  const {posts} = usePosts()

  const [sortArr, setSortArr] = useState([
    {name: 'default', isActive: true},
    {name: 'data', isActive: false},
    {name: 'title', isActive: false},])

  const sortFunctions: SortFunction = {
    'data': () => setAllPosts([...allPosts].sort((a, b) => isSorted ? a.data.localeCompare(b.data) : b.data.localeCompare(a.data))),
    'title': () => setAllPosts([...allPosts].sort((a, b) => a.title.localeCompare(b.title))),
    'default': () => setAllPosts(posts),
  }

  const sortHandle = (value: string) => {
    sortFunctions[value]()
    setSortArr(sortArr.map(el => el.name === value ? {...el, isActive: true} : {...el, isActive: false}))
    setIsSorted(!isSorted)
  }

  return (
    <nav className={s.container}>
      <ul className={s.blockItem}>
        {sortArr.map(el =>
          <BtnPoly key={el.name} className={`${s.btn} ${el.isActive ? s.isActive : ''}`}
                   onClick={() => sortHandle(el.name)}>
            {el.name}
          </BtnPoly>
        )}
      </ul>
    </nav>
  );
};
