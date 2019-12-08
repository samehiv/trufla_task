import React from 'react';

import {
  Link,
} from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div key={product.id} className="row mb-3">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="text-muted"> Name: {product.name} </div>
            <div className="text-muted"> Price: {product.price} </div>
            <div className="text-muted">
              <div>Promotions: {!product.promotions.length && 'None'}</div>
              {product.promotions.length > 0 &&
                <ul>
                  {product.promotions.map(promotion => (
                    <li key={promotion.id}>
                      <span className="mr-3">code: {promotion.code}</span>
                      <span className="mr-3">Discount: {promotion.discount}</span>
                      <span>Active: {promotion.active.toString()}</span>
                    </li>
                  ))}
                </ul>
              }
            </div>
            <Link to={`/products/${product.id}/add_promotion`}>Add promotion</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem