import s from './Header.module.scss'
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {MenuBurger} from "@/features/header/ui/menuBurger/MenuBurger.tsx";

export const Header = () => {
  const pages = [{name: 'Home', path: 'home'}, {name: 'Profile', path: 'profile'}]

  const [modNav, setModNav] = useState('')



  return (
    <header className={s.container}>
      <section className={`containerApp ${s.block}`}>
        <div className={s.logo}>
          <IconSvg name={'logo'}/>
          <div className={s.text}>
            <p>ost</p>
            <p>uls</p>
          </div>
        </div>

        <MenuBurger setModNav={setModNav} modNav={modNav}/>

        <nav className={`${s.nav} ${modNav}`}>
          <ul>
            {pages.map(el => <li key={el.path} className={s.li}>
              <NavLink to={el.path} className={({isActive}) => isActive ? s.active : ''}>
                {el.name}
              </NavLink>
            </li>)}
          </ul>
        </nav>
      </section>
    </header>
  );
};
