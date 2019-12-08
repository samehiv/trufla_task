import React, { useState, useEffect } from 'react';

function PromotionForm({ save, promotion }) {

  const [statePromotion, setStatePromotion] = useState({ code: '', discount: 0, active: true });

  useEffect(() => {
    if (promotion && Object.keys(promotion).length > 0) {
      setStatePromotion(promotion)
    }

  }, [promotion])


  function handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setStatePromotion({ ...statePromotion, [target.name]: value })
  }

  function handleSumbit(e) {
    e.preventDefault()
    save(statePromotion)
  }

  return (

    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label>Code</label>
        <input className="form-control" type="text" name="code" 
          value={statePromotion.code} onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input className="form-control" type="number" name="discount"
          value={statePromotion.discount}  onChange={handleChange}/>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" name="active" checked={statePromotion.active}
        onChange={handleChange} />
        <label>Active</label>
      </div>

      <button className="btn btn-primary">Save</button>

    </form>

  )
}


export default PromotionForm