import cat from "@/assets/image/app/cat.png";
import s from './Home.module.scss'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {NavLink} from "react-router-dom";
import {baseUrl} from "@/main.tsx";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

export const Home = () => {
  const itemRef = useRef(null);
  const imgRef = useRef(null);

  const [pos, setPos] = useState({x: 100, y: 40})

  console.log(pos)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const {clientX, clientY} = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const posX = (clientX - centerX) / centerX;
      const posY = (clientY - centerY) / centerY;

      itemRef.current.style.transform = `translate(${posX * 5}px, ${posY * -5}px)`;
      setPos({x: pos.x + posX * 1.2, y: pos.y +  posY * -1.2})
      // imgRef.current.style.backgroundPosition = `${50 + posX * 1.2}% ${50 - posY * 1.2}%`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={s.containerHome}>
      <div className={`${s.background}`}>
        <div ref={imgRef} className={`${s.img}`}
             style={{
               backgroundImage: `url(${cat})`,
               backgroundPosition: `${pos.x}% ${pos.y}%`
             }}/>
        <div ref={itemRef} className={s.item}>
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