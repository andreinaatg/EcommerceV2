import React from 'react';
import './productDetail.css';

function ProductDetail({ product, onBack }) {
  return (
    <div className="product-detail">
      <img src={product.img} alt={product.name} className="detail-image" />
      <div className="details"> 
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={onBack}>Back to Products</button>
      </div>
    </div>
  );
}

export default ProductDetail;
