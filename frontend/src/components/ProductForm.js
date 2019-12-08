import React, { useState, useEffect } from 'react';

function ProductForm({ save, departments, product }) {

  const [stateProduct, setStateProduct] = useState({name: '', price: 0, department_id: departments[0].id});

  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setStateProduct(product)
    }

  },[departments, product])


  function handleChange(e){
    setStateProduct({...stateProduct, [e.target.name]: e.target.value })
  }

  function handleSumbit(e) {
    e.preventDefault()
    save(stateProduct)
  }

  return (

    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" type="text" name="name" onChange={handleChange} value={stateProduct.name} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input className="form-control" type="number" name="price" onChange={handleChange} value={stateProduct.price} />
      </div>
      <div className="form-group">
        <label>Department</label>
        <select className="form-control" name="department_id" onChange={handleChange} value={stateProduct.department_id}>
          { departments.map(d => (
            <option value={d.id} key={d.id}>{d.name}</option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary">Save</button>
      
    </form>

  )
}


export default ProductForm