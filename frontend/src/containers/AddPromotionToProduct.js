import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import http from '../http'
import Alert from "../components/Alert"
import PromotionToProductFrom from '../components/PromotionToProductForm';

function AddPromotionToProduct() {

  const [message, setMessage] = useState({})
  const [promotions, setPromotions] = useState([])

  const { id } = useParams()


  useEffect(() => {
    http.get(`promotions?all=1`)
      .then(res => {
        setPromotions(res.data.data.items)
      })
  }, [])

  function save(promotionId) {
    http.post(`products/${id}/add_promotion`, { promotion_id: promotionId}).then(res => {
      setMessage({ level: 'success', message: res.data.message })
    }).catch(error => {
      const { data } = error.response
      setMessage({ level: 'danger', message: data.error, errors: data.errors })
    })
  }

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h5>Add promotion to product</h5>
        {promotions.length > 0 &&
          <PromotionToProductFrom save={save} promotions={promotions} />
        }
      </div>
      <Alert message={message} />
    </div>
  );
}

export default AddPromotionToProduct