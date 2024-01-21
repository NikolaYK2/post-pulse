import {Dispatch, SetStateAction, useMemo, useState} from "react";
import s from './Paginator.module.scss'
import {PaginatorType} from "@/app/postRpovider/PostProvider.tsx";

type PaginatorTypeComponent = {
  pagination: PaginatorType,
  setPagination: Dispatch<SetStateAction<PaginatorType>>
}

export const Paginator = ({pagination, setPagination}: PaginatorTypeComponent) => {
  //общее количество страниц при показе props.pageSize на странице
  const {totalCount, page, limit} = pagination
  const pagesCount = Math.ceil(totalCount / limit);

  const pages = useMemo(() => {
    let pagesArray: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray = [...pagesArray, i];
    }
    return pagesArray
  }, [pagesCount])

  // Вычисление общего количества "порций" страниц
  const portionCount = Math.ceil(pagesCount / limit)
  // Использование useState для отслеживания текущей "порции" страниц
  const [portionPage, setPortionPage] = useState(Math.ceil(page / limit))
  // Вычисление границ текущей "порции" страниц
  const prevPortionNumber = (portionPage - 1) * limit + 1
  const nextPortionNumber = portionPage * limit
// Фильтрация массива страниц для отображения только текущей "порции" страниц
  const filterPages = useMemo(() => {
    return pages.filter(p => p >= prevPortionNumber && p <= nextPortionNumber)
  }, [pages, prevPortionNumber, nextPortionNumber])

  return (
    <div className={s.container}>
      <div className={s.paginatorBut}>
        {portionPage > 1 &&
            < >
                <button onClick={() => setPortionPage(1)}>{'<'}</button>
                <button onClick={() => setPortionPage(portionPage - 1)}>{'<<'}</button>
            </>}
      </div>

      {filterPages.map((p) => <span
        key={p}
        className={page === p ? s.pageActive : s.page}
        onClick={() => setPagination({...pagination, page: p})}>
            {p}
          </span>
      )}

      {portionCount > portionPage &&
          <div className={s.paginatorBut}>
              <button onClick={() => setPortionPage(portionPage + 1)}>{'>>'}</button>
              <button onClick={() => setPortionPage(portionCount)}>{'>'}</button>
          </div>}
    </div>
  );
};

