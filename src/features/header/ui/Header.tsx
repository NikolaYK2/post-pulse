import s from './Header.module.scss'
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {MenuBurger} from "@/features/header/ui/menuBurger/MenuBurger.tsx";
import {SearchBar} from "@/features/header/ui/find/SearchBar.tsx";

export const Header = () => {
  const pages = [{name: 'Home', path: 'home'}, {name: 'Profile', path: 'profile'}]

  const [modStyleNav, setModStyleNav] = useState('')
  const [switchNav, setSwitchNav] = useState(true)

  const switchNavHandle = () => {
    setSwitchNav(true)
  }

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

        <SearchBar/>

        <MenuBurger setModNav={setModStyleNav} modNav={modStyleNav} switchNav={switchNav} setSwitchNav={setSwitchNav}/>

        <nav className={`${s.nav} ${modStyleNav}`}>
          <ul>
            {pages.map(el => <li key={el.path} className={s.li}>
              <NavLink to={el.path}
                       className={({isActive}) => isActive ? s.active : ''}
                       onClick={switchNavHandle}
              >
                {el.name}
              </NavLink>
            </li>)}
          </ul>
        </nav>
      </section>
    </header>
  );
};
