import s from './H2.module.scss'

type Props = {
  title?: string,
  side?: 'left' | 'right',
  decoration?: boolean,
  className?:string,
}

export const H2 = ({title, side, decoration = true, className}: Props) => {
  return (
    <h2 className={`${s.h2} ${className}`}>
      {side === 'left' && <div className={`${s.circle} ${s.left}`}/>}
      {title}
      {side === 'right' && <div className={`${s.circle} ${s.right}`}/>}
      <div className={`${decoration && s.decoration}`}/>
    </h2>
  )
    ;
};
