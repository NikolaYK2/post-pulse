import s from './Profile.module.scss'
import circle from '@/assets/image/profile/circle.jpg'
import square from '@/assets/image/profile/square.jpg'
import triangle from '@/assets/image/profile/triangle.jpg'
import {createRef, useLayoutEffect} from "react";


export const Profile = () => {
  const images = [{id: 0, name: circle}, {id: 1, name: square}, {id: 2, name: triangle}]
  const imgRefs = images.map(() => createRef<HTMLImageElement>())
  
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      imgRefs.forEach((el) => el.current?.classList.add(s.imgActive))
    })
  }, [])


  return (
    <section className={s.container}>
      <div className={`containerApp ${s.block}`}>
        <div className={s.decoratorBc}>
          {images.map((img, index) => <img key={img.id} src={img.name} alt="img" ref={imgRefs[index]}/>)}
        </div>
        <form className={s.form}>
          <div>sss</div>
        </form>
      </div>
    </section>
  );
};

