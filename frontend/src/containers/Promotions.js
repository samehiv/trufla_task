import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import http from '../http'
import PromotionsList from '../components/PromotionsList'
import Pagination from '../components/Pagination'


function Promotions(props) {
  const [promotions, setPromotions] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    http.get(`promotions${props.location.search}`)
      .then(res => {
        setPromotions(res.data.data.items)
        setPagination(res.data.data.pagination)
      })

  }, [props])

  return (
    <div>
      <h5>Promotion</h5>
      <Link to='/promotions/new' className="mb-3 d-block">New promotion</Link>
      <PromotionsList promotions={promotions} />
      {(pagination && promotions.length > 0) &&
        <Pagination pagination={pagination} />
      }
    </div>
  );
}

export default Promotions