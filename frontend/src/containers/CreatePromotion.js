import React, { useState } from 'react';
import http from '../http'
import Alert from "../components/Alert"
import PromotionForm from '../components/PromotionForm';

function CreatePromotion() {

  const [message, setMessage] = useState({})

  function save(promotion) {
    http.post('promotions', { ...promotion }).then(res => {
      setMessage({level: 'success', message: res.data.message })
    }).catch(error => {
      const { data } = error.response
      setMessage({ level: 'danger', message: data.error, errors: data.errors })
    })
  }

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h5>Create new promotion</h5>
        <PromotionForm save={save} />
      </div>
      <Alert message={message} />
    </div>
  );
}

export default CreatePromotion