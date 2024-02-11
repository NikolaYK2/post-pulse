import {IconSvg} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from './Messengers.module.scss'


type messengersType = {
  name: 'telegram' | 'linkedin',
  link: string,
}
type Props = {
  messengers: messengersType[]
}
export const Messengers = ({messengers}:Props) => {

  return (
    <div className={s.messengers}>
      {messengers.map(el => <a key={el.name} href={el.link} className={s.link}><IconSvg name={el.name}/></a>)}
    </div>
  );
};
