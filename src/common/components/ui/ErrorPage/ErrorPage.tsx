import s from './ErrorPage.module.scss'
import error from '@/assets/image/error/404.png'
import {BtnPoly} from "@/common/components/ui/btnPoly/BtnPoly.tsx";
import {NavLink} from "react-router-dom";

export const ErrorPage = () => {

  return (
    <div className={s.container}>
        <div className={s.img}>
          <img src={error} alt=""/>
        </div>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred. </p>
      <BtnPoly as={NavLink} to={'/posts'}>Go Home</BtnPoly>
    </div>
  );
};
