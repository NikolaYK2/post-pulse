import s from './Header.module.scss'
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {MenuBurger} from "@/features/header/ui/menuBurger/MenuBurger.tsx";
import {SearchBar} from "@/features/header/ui/find/SearchBar.tsx";
import {Off} from "@/common/components/ui/off/Off.tsx";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";

export const Header = () => {

  const pages = [{name: 'Home', path: 'home'}, {name: 'Posts', path: 'posts'}, {name: 'Profile', path: 'profile'}]

  const [modStyleNav, setModStyleNav] = useState('')
  const [switchNav, setSwitchNav] = useState(true)

  const {isLogged, setIsLogged} = useAuth()

  const switchNavHandle = () => {
    setSwitchNav(true)
  }

  const logOut = () => {
    setIsLogged(false)
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

        {isLogged && <Off callback={logOut}/>}

      </section>
    </header>
  );
};
