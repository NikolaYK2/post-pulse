import s from './Off.module.scss'


type Props = {
  size?: string;
  callback:()=>void
}
export const Off = ({size,callback}: Props) => {

  return (
    <div className={s.container} style={{width: size, height: size}} onClick={callback}>
      <div className={s.off}>
        <div className={s.psevdoOff}></div>
      </div>
    </div>
  );
};
