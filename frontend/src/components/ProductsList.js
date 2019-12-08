import React from 'react';
import ProductItem from './ProductItem'

function ProductsList({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList