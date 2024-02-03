import {MutableRefObject, useEffect, useRef} from "react";

type EntryType={
  isIntersecting:boolean
}
export const useObserver = (ref: MutableRefObject<HTMLDivElement | null>, canLoad:boolean, isLoading:boolean, callback:()=>void) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (isLoading) return //Если true до создания нового обсервера не доходим (если еще загрузка получается)
    //проверка если обсервер уже создан и в current уже что-то находится, тогда отключаем наблюдение в текущий момент
    if (observer.current) observer.current.disconnect()

    const fn = (entries: EntryType[]) => {
      if (entries[0].isIntersecting && canLoad) { //для срабатывания калбека только в зоне видимости, выход из зоны не срабатывает
        callback()
      }
    }

    observer.current = new IntersectionObserver(fn);
    if (ref.current) observer.current.observe(ref.current) //за каким эелементом наблюдаем
  }, [isLoading]);
};
