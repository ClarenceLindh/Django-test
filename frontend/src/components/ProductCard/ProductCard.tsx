import React from 'react'
import { ProductObject } from '../productsSlice';

const ProductCard = (product: ProductObject) => {
  return (
    <div>
      <h3>{product.product.name}</h3>
      <h4>{product.product.price} kr</h4>
    </div>
  );
};

export default ProductCard;