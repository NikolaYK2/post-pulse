import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './SearchBar.module.scss'
import {ChangeEvent} from "react";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";


export const SearchBar = () => {

  const {setSearch, search} = usePosts()

  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div className={s.container}>
      <div className={s.find}>
        <label>

          <input className={`${s.input}`}
                 type="search"
                 value={search}
                 onChange={searchHandle}
                 placeholder={'Search...'}/>

          <div className={s.image}>
            <IconSvg name={'find'}/>
          </div>

        </label>
      </div>
    </div>
  );
};
