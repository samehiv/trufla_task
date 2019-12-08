import React, { useState } from 'react';

function PromotionToProductForm({ save, promotions }) {

  const [promotionId, setPromotionId] = useState(promotions[0].id);

  function handleChange(e) {
    setPromotionId(e.target.value)
  }

  function handleSumbit(e) {
    e.preventDefault()
    save(promotionId)
  }

  return (

    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label>Promotion</label>
        <select className="form-control" name="promotion_id" onChange={handleChange} >
          {promotions.map(d => (
            <option value={d.id} key={d.id}>
              code: {d.code},
              discount: {d.discount},
              active: {d.active.toString()}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary">Save</button>

    </form>

  )
}


export default PromotionToProductForm