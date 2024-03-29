import {useEffect, useState} from "react";
import s from './MenuBurger.module.scss'

type Props = {
  switchNav:boolean,
  modNav:string,
  setModNav: (style: string) => void,
  setSwitchNav:(value:boolean)=>void
}
export const MenuBurger = ({setModNav, modNav, switchNav,setSwitchNav}: Props) => {
  const [modBurger, setModBurger] = useState("")

  const burgerHandle = () => {
    setSwitchNav(!switchNav)
  }

  useEffect(() => {
    if (switchNav) {
      setModNav(s.navOff)
      setModBurger(s.menuBurger)
      document.body.style.overflow = "unset"
    } else {
      setModNav(s.activeNav)
      setModBurger(s.activeBurger)
      document.body.style.overflow = "hidden"
    }
  }, [switchNav, setModNav, modNav])

  return (
    <div className={s.container}>
      <div className={`${s.menuBurger} ${modBurger}`} onClick={burgerHandle}>
        <span className={s.span1}/>
        <span className={s.span2}/>
        <span className={s.span3}/>
      </div>
    </div>);
};
