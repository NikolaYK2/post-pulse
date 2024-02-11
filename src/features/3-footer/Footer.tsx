import s from './Footer.module.scss'
import {Messengers} from "@/common/components/ui/messengers/Messengers.tsx";

export const Footer = () => {


  return (
    <footer className={s.containerFooter}>
      <div className={s.bcFoot}>
        <div>POST</div>
        <div>PULSE</div>
      </div>

      <div className={`${s.blockFoot} containerApp`}>

        <div className={s.item}>
          <div className={s.describeLinks}>
            <p>icon 'Bean Eater' from loading.io</p>
            <p>icons from iconfinder.com</p>
          </div>

          <Messengers messengers={[
            {name: 'telegram', link: 'https://t.me/Nik_Kev'},
            {name: 'linkedin', link: 'https://www.linkedin.com/in/nikolaj-kevlich-6a4423263/'},
          ]}/>
        </div>

      </div>

      <div className={s.reserved}>
        <p>© 2024 post pulse. All Rights Reserved</p>
      </div>
    </footer>
  );
};
