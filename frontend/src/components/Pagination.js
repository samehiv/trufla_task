import React from 'react';
import {
  Link,
} from "react-router-dom";
import qs from 'query-string'
import {
  useLocation
} from "react-router-dom";
const _ = require('lodash');

function Pagination({ pagination }) {
  const location = useLocation()
  const { pathname, search } = location

  let query = qs.parse(search)

  const { per_page, current_page, total_pages, next_page, prev_page } = pagination

  const queryString = qs.stringify(_.pickBy(query, (v, k) => k != 'page' && k != 'per_page' ))

  let nextRender = 0
  let prevRender = 0

  function pageItem(page) {
    return (
      <li className={`page-item ${page == current_page ? 'active' : ''}`} key={page}>
        <Link to={`${pathname}?page=${page}&per_page=${per_page}${queryString.length > 0 ? '&'+queryString : ''}`}
          className='page-link'>
          {page}
        </Link>
      </li>

    )
  }

  function nextPages() {
    let curr = current_page + 1
    let el = []
    while(nextRender + prevRender < 9 && total_pages >= curr) {
      el = [...el, pageItem(curr) ]
      curr += 1
      nextRender += 1
    }

    return el
  }

  function prevPages() {
    let curr = current_page - 5
    curr = Math.max(curr, 1)
    let el = []
    while(prevRender < 5 && curr < current_page) {
      el = [...el, pageItem(curr)]
      prevRender += 1
      curr += 1
    }

    return el
  }

  return (
    <div className="row justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${prev_page ? '' : 'disabled'}`}>
            <Link to={`${pathname}?page=${prev_page}&per_page=${per_page}&${queryString}`} className="page-link">
              Previous
            </Link>
          </li>

          { prevPages() }

          {pageItem(current_page)}
          
          {nextPages()}

          <li className={`page-item ${next_page ? '' : 'disabled'}`}>
            <Link to={`${pathname}?page=${next_page}&per_page=${per_page}&${queryString}`} className="page-link">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Pagination