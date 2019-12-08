import React, { useState } from 'react';
import http from '../http'
import Alert from "../components/Alert"
import DepartmentForm from '../components/DepartmentForm';

function CreateDepartment(props) {

  const [message, setMessage] = useState({})

  function save(department) {
    http.post('departments', { ...department }).then(res => {
      setMessage({level: 'success', message: res.data.message })
    }).catch(error => {
      const { data } = error.response
      setMessage({ level: 'danger', message: data.error, errors: data.errors })
    })
  }

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h5>Create new department</h5>
        <DepartmentForm save={save} />
      </div>
      <Alert message={message} />
    </div>
  );
}

export default CreateDepartment