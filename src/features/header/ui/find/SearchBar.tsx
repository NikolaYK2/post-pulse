import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './SearchBar.module.scss'
import {ChangeEvent, useEffect, useState} from "react";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";


export const SearchBar = () => {
  const {setSearch} = usePosts();
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(''); // состояние для отложенного поиска

  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <div className={s.container}>
      <div className={s.find}>
        <label>
          <input
            className={`${s.input}`}
            type="search"
            value={inputValue}
            onChange={searchHandle}
            placeholder={'Search...'}
          />
          <div className={s.image}>
            <IconSvg name={'search'}/>
          </div>
        </label>
      </div>
    </div>
  );
};






