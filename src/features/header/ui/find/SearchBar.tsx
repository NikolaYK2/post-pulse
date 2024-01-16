import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './SearchBar.module.scss'
import {ChangeEvent, useState} from "react";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";
import {debounce} from "@/common/utils/throttle.ts";

export const SearchBar = () => {
  const {setSearch} = usePosts();

  const [inputValue, setInputValue] = useState('');

  const debounceSearch = debounce(setSearch, 300)

  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value.toLowerCase()
    setInputValue(newValue);
    debounceSearch(inputValue)
  };


  return (
    <div className={s.container}>
      <div className={s.find}>
        <label>
          <input
            className={`${s.input}`}
            type="search"
            value={inputValue} // используем inputValue вместо search
            onChange={searchHandle}
            placeholder={'Search...'}
          />
          <div className={s.image}>
            <IconSvg name={'find'}/>
          </div>
        </label>
      </div>
    </div>
  );
};


