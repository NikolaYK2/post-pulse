import s from './Header.module.scss'
import {IconSvg} from "@/common/components/iconSvg/IconSvg.tsx";

export const Header = () => {

  const pages = ['Home', 'Profile']

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
            {pages.map(el => <li>{el}</li>)}
          </ul>
        </nav>
      </section>
    </header>
  );
};
