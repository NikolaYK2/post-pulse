import {useEffect, useState} from "react";
import s from './MenuBurger.module.scss'

type Props = {
  setModNav: (style: string) => void
}
export const MenuBurger = ({setModNav}: Props) => {
  const [modBurger, setModBurger] = useState("")

  const [switchNav, setSwitchNav] = useState(true)

  const burgerHandle = () => {
    setSwitchNav(!switchNav)
  }

  useEffect(() => {
    if (switchNav) {
      setModNav(s.headerNav)
      setModBurger(s.menuBurger)
      document.body.style.overflow = "unset"
    } else {
      setModNav(s.activeMenu)
      setModBurger(s.activeBurger)
      document.body.style.overflow = "hidden"
    }
  }, [switchNav, setModNav])

  return (
    <div className={s.container}>
      <div className={`${s.menuBurger} ${modBurger}`} onClick={burgerHandle}>
        <span className={s.span1}/>
        <span className={s.span2}/>
        <span className={s.span3}/>
      </div>
    </div>);
};
