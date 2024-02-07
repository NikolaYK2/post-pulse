import cat from "@/assets/image/app/cat.png";
import s from './Home.module.scss'

export const Home = () => {

  return (
    <>
      <div className={`${s.bc1}`}>
        <img className={`${s.img}`} src={cat} alt=""/>
      </div>
      <div className={`${s.bc2}`}></div>
    </>
  );
};
