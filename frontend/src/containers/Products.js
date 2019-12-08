import React, { useState, useEffect } from 'react';
import qs from 'query-string'
import { Link } from "react-router-dom";
import http from '../http'
import ProductsList from '../components/ProductsList'
import Pagination from '../components/Pagination'
import SearchForm from '../components/SearchForm'
import ProductFilters from '../components/ProductFilters';

function Products(props) {
  const { location, history } = props;
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null)
  const query = qs.parse(location.search)

  useEffect(() => {
    
    http.get(`products${location.search}`)
      .then(res => {
        setProducts(res.data.data.items)
        setPagination(res.data.data.pagination)
      })

  }, [props])


  function search(q) {
    query.q = q
    query.page = 1
    history.push(`${location.pathname}?${qs.stringify(query)}`)
  }

  return (
    <div>
      <h5>Products</h5>
      <Link to='/products/new' className="mb-3 d-block">New product</Link>
      <SearchForm search={search} keyword={query.q} />
      <ProductFilters query={query} pathname={location.pathname} />
      <ProductsList products={products} />
      { (pagination && products.length > 0) && 
        <Pagination pagination={pagination} />
      }
    </div>
  );
}

export default Products