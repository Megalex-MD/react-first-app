import React from "react";
import { getPagesArr } from "../../../utils/pages";

const Pagination = ({ totalPages, page, pageChange }) => {
  let pagesArr = getPagesArr(totalPages)
  return (
    <div className='page__container'>
      {pagesArr.map(p => <span
        key={p}
        className={page === p ? 'page page__active' : 'page'}
        onClick={() => pageChange(p)}>{p}</span>)}
    </div>
  )
}

export default Pagination