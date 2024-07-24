import React from 'react';
import './productDetail.css';

function ProductDetail({ product, onBack }) {
  return (
    <div className="product-detail">
      <img src={product.img} alt={product.name} className="detail-image" />
      <div className="details"> 
        <h2>{product.name}</h2>
        <p> ${product.price}</p>
        <p>{product.description}</p>
        <button onClick={onBack}>Back to Products</button>
        <ul className='accordion'> 
          <li>
          <input type="radio" id="firts" checked name="accordion-group"/>
              <label for="firts">Ingredients</label>
              <div class="content">
                  <p>{product.ingredients}</p>
              </div>
          </li>
          <li>
          <input type="radio" id="second" checked name="accordion-group"/>
              <label for="second">How to use</label>
              <div class="content">
                  <p>{product.howToUse}</p>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
