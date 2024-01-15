import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './SearchBar.module.scss'


export const SearchBar = () => {

  return (
    <div className={s.container}>
      <div className={s.find}>
        <label>

          <input className={`${s.input}`} type="search"/>

          <div className={s.image}>
            <IconSvg name={'find'}/>
          </div>

        </label>
      </div>
    </div>
  );
};
