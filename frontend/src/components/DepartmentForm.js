import React, { useState, useEffect } from 'react';

function DepartmentForm({ save, department }) {

  const [stateDepartment, setStateDepartment] = useState({ name: '' });

  useEffect(() => {
    if (department && Object.keys(department).length > 0) {
      setStateDepartment(department)
    }

  }, [department])


  function handleChange(e) {
    setStateDepartment({ ...stateDepartment, [e.target.name]: e.target.value })
  }

  function handleSumbit(e) {
    e.preventDefault()
    save(stateDepartment)
  }

  return (

    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" type="text" name="name" onChange={handleChange} value={stateDepartment.name} />
      </div>

      <button className="btn btn-primary">Save</button>

    </form>

  )
}


export default DepartmentForm