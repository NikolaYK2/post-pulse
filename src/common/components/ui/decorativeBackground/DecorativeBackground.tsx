import {createRef, useLayoutEffect} from "react";
import {IconSvg, PropsIconSvgType} from "@/common/components/ui/iconSvg/IconSvg.tsx";
import s from "./DecorativeBackground.module.scss";


type Props = {
  svgProps: PropsIconSvgType[],
  imageProps: string[]
}
export const DecorativeBackground = ({svgProps, imageProps}: Props) => {

  const images = imageProps.map((img, index) => ({id: index + 1, name: img}))
  const svg = [...svgProps.map(el => el.name)]
  const imgRefs = images.map(() => createRef<HTMLImageElement>())

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      imgRefs.forEach((el) => el.current?.classList.add(s.imgActive))
    })
  }, [])

  return (
    <div className={s.decoratorBc}>
      {images.map((img, index) => <img key={img.id} src={img.name} alt="img" ref={imgRefs[index]}/>)}
      {svg.map((svg) => <div key={svg} className={s.svg}><IconSvg name={svg}/></div>)}
    </div>
  );
};
