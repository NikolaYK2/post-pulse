import s from './Header.module.scss'
import {IconSvg} from "@/common/components/iconSvg/IconSvg.tsx";
import {NavLink} from "react-router-dom";

export const Header = () => {

  const pages = [{name:'Home', path:'home'}, {name:'Profile', path:'profile'}]

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
        <nav className={s.nav}>
          <ul>
            {pages.map(el => <li className={s.li}><NavLink to={el.path} className={({isActive})=> isActive ? s.active : ''}>{el.name}</NavLink></li>)}
          </ul>
        </nav>
      </section>
    </header>
  );
};