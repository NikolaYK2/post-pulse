import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './Logo.module.scss'
import {NavLink} from "react-router-dom";
import {baseUrl} from "@/main.tsx";

export const Logo = () => {
  return (
    <NavLink to={baseUrl} className={s.logo}>
      <IconSvg name={'logo'}/>
      <div className={s.text}>
        <p>ost</p>
        <p>uls</p>
      </div>
    </NavLink>
  );
};
