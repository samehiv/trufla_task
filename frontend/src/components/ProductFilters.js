import React from 'react';
import { Link, useHistory } from "react-router-dom";

import qs from 'query-string'
const _ = require('lodash');


function ProductFilters() {
  const filters = ['has_promotion']
  const histroy = useHistory()
  let query = qs.parse(histroy.location.search)
  const pathname = histroy.location.pathname
  query.page = 1

  const queryString = qs.stringify(_.pickBy(query, (v, k) => !filters.includes(k)))

  return (
    <div className="mb-3">
      <Link to={`${pathname}?${queryString}`} className="mr-3">All</Link>
      <Link to={`${pathname}?${queryString}&has_promotion=1`}>Has active promotion</Link>
    </div>
  );
}

export default ProductFilters