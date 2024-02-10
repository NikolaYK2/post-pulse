import cat from "@/assets/image/app/cat.png";
import s from './Home.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {NavLink} from "react-router-dom";
import {baseUrl} from "@/main.tsx";
import {MouseEvent, useState} from "react";
import {throttle} from "@/common/utils/throttle.ts";

export const Home = () => {
  const [posImg, setPosImg] = useState({x: 50, y: 50});
  const [posItem, setPosItem] = useState({x: 0, y: 0});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const {clientX, clientY} = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = (clientX - centerX) / centerX;
    const posY = (clientY - centerY) / centerY;

    setPosImg({x: 50 + posX * 1.2, y: 50 - posY * 1.2});
    setPosItem({x: posX * -8, y: posY * -8});
  };

  const throttledFunction  = throttle(handleMouseMove, 100)


  return (
    <div className={s.containerHome} onMouseMove={throttledFunction }>
      <div className={`${s.background}`}>
        <div className={`${s.img}`}
             style={{backgroundImage: `url(${cat})`, backgroundPosition: `${posImg.x}% ${posImg.y}%`}}/>
        <div className={s.item} style={{transform: `translate(${posItem.x}px, ${posItem.y}px)`}}>
          <h1>Welcome!</h1>
          <p>Here you will find the latest and most discussed news.</p>
          <BtnPoly className={s.btn} as={NavLink} to={`${baseUrl}posts`}>Get Start</BtnPoly>
          <div></div>
        </div>
      </div>
      <div className={`${s.footerHome}`}></div>
    </div>
  );
};





