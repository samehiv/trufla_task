import React, { useState, useEffect } from 'react';
import http from '../http'
import ProductForm from "../components/ProductForm";
import Alert from "../components/Alert"

function CreateProduct(props) {

  const [departments, setDepartments] = useState([]);
  const [message, setMessage] = useState({})

  useEffect(() => {
    http.get(`departments?all=1`)
      .then(res => {
        setDepartments(res.data.data.items)
      })
  }, [props])



  function save(product) {
    http.post('products', { ...product }).then(res => {
      setMessage({level: 'success', message: res.data.message })
    }).catch(error => {
      const { data } = error.response
      setMessage({ level: 'danger', message: data.error, errors: data.errors })
    })
  }

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h5>Create new Product</h5>
        { departments.length > 0 &&
          <ProductForm save={save} departments={departments} />
        }
      </div>
      <Alert message={message} />
    </div>
  );
}

export default CreateProduct