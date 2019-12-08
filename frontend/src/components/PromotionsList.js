import React from 'react';

function PromotionsList({ promotions }) {
  return (
    <div>
      {promotions.map(promotion => (
        <div key={promotion.id} className="row mb-3">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="text-muted"> Code: {promotion.code} </div>
                <div className="text-muted">Discount: {promotion.discount} </div>
                <div className="text-muted">Active: {promotion.active.toString()} </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PromotionsList