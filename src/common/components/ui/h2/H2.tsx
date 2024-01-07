import s from './H2.module.scss'

type Props = {
  title: string,
  side: 'left' | 'right'
}

export const H2 = ({title, side}: Props) => {
  return (
    <h2 className={s.h2}>
      {side === 'left' && <div className={`${s.circle} ${s.left}`}/>}
      {title}
      {side === 'right' && <div className={`${s.circle} ${s.right}`}/>}
    </h2>
  );
};
