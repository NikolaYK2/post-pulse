import {useMemo, useState} from "react";
import s from './Paginator.module.scss'

type PaginatorTypeComponent = {
  totalCount: number,
  limit: number,
  page: number,
}

export const Paginator = ({totalCount, limit, page}: PaginatorTypeComponent) => {
  //общее количество страниц при показе props.pageSize на странице
  let pagesCount = Math.ceil(totalCount / limit);

  const pages = useMemo(() => {
    let pagesArray: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray = [...pagesArray, i];
    }
    return pagesArray
  }, [pagesCount])

  // Вычисление общего количества "порций" страниц
  let portionCount = Math.ceil(pagesCount / limit)
  // Использование useState для отслеживания текущей "порции" страниц
  const [portionPage, setPortionPage] = useState(Math.ceil(page / limit))
  // Вычисление границ текущей "порции" страниц
  let prevPortionNumber = (portionPage - 1) * limit + 1
  let nextPortionNumber = portionPage * limit
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

      {filterPages.map((p) => {
        return (
          <span key={p}
                className={page === p ? s.pageActive : s.page}
                onClick={() => {
                }}
          >{p}</span>
        );
      })}

      {portionCount > portionPage &&
          <div className={s.paginatorBut}>
              <button onClick={() => setPortionPage(portionPage + 1)}>{'>>'}</button>
              <button onClick={() => setPortionPage(portionCount)}>{'>'}</button>
          </div>}
    </div>
  );
};

