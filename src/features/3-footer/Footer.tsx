import s from './Footer.module.scss'
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";

export const Footer = () => {

  const messengers = [
    {name: 'telegram', link: 'https://t.me/Nik_Kev'},
    {name: 'linkedin', link: 'https://www.linkedin.com/in/nikolaj-kevlich-6a4423263/'}] as const


  return (
    <footer className={s.containerFooter}>
      <div className={s.bcFoot}>
        <div>POST</div>
        <div>PULSE</div>
      </div>

      <div className={`${s.blockFoot} containerApp`}>

        <div className={s.item}>
          <div className={s.describe}>
            <p> icon 'Bean Eater' from loading.io</p>
            <p>icons from iconfinder.com</p>
          </div>

          <div className={s.messengers}>
            {messengers.map(el => <a href={el.link} className={s.link}><IconSvg name={el.name}/></a>)}
          </div>
        </div>

      </div>

      <div className={s.reserved}>
        <p>© 2024 post pulse. All Rights Reserved</p>
      </div>
    </footer>
  );
};
