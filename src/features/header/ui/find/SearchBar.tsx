import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './SearchBar.module.scss'
import {ChangeEvent, useEffect, useState} from "react";
import {usePosts} from "@/app/postRpovider/usePosts.tsx";


export const SearchBar = () => {
  const {setSearch} = usePosts();
  const [inputValue, setInputValue] = useState(''); // состояние для ввода поиска
  const [debouncedValue, setDebouncedValue] = useState(''); // состояние для отложенного поиска

  const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLowerCase()); // обновляем inputValue при каждом изменении
  };

  // Обновляем debouncedValue с задержкой при каждом изменении inputValue
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 700); // Задержка в 1000 миллисекунд

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  // Обновляем search при каждом изменении debouncedValue
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






