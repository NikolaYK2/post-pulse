import s from './Header.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";
import {Off} from "@/common/components/ui/off/Off.tsx";
import {useAuth} from "@/app/authProvider/lib/useAuth.ts";
import {Logo} from "@/features/1-header/ui/logotip/Logo.tsx";
import {SearchBar} from "@/features/1-header/ui/find/SearchBar.tsx";
import {MenuBurger} from "@/features/1-header/ui/menuBurger/MenuBurger.tsx";

export const Header = () => {

  const pages = [
    {name: 'Home', path: 'home'},
    {name: 'Posts', path: 'posts'},
    {name: 'Profile', path: 'profile'}]

  const [modStyleNav, setModStyleNav] = useState('')

  const [switchNav, setSwitchNav] = useState(true)

  const {isLogged, setIsLogged} = useAuth()

  const location = useLocation();
  const isNestedRoute = location.pathname !== '/post-pulse/home';
  const headerStyle = isNestedRoute ? s.modContainerHeader : '';

  const switchNavHandle = () => {
    setSwitchNav(true)
  }

  const logOut = () => {
    setIsLogged(false)
  }

  return (
    <header className={`${s.container} ${headerStyle}`}>
      <section className={`containerApp ${s.block}`}>

        <Logo/>

        <SearchBar/>

        <MenuBurger setModNav={setModStyleNav} modNav={modStyleNav} switchNav={switchNav} setSwitchNav={setSwitchNav}/>

        <nav className={`${s.nav} ${modStyleNav}`} onClick={switchNavHandle}>
          <ul>
            {pages.map(el => <li key={el.path} className={s.li}>
              <NavLink to={el.path} end
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
