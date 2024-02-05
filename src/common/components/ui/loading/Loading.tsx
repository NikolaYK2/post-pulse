import s from './Loading.module.scss'
import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";

export const Loading = () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        {/*<img src={loading} alt=""/>*/}
        <IconSvg name={'loading'}/>
      </div>
    </div>
  );
};
// <!-- [ldio] generated by https://loading.io/ -->