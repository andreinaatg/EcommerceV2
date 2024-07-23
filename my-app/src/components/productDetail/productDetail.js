

function displayProductDetail(product) {
    return (
      <div className="product-detail">
        <img src={product.img} alt={product.name} className="detail-image" />
        <div className="details"> 
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
        </div>
      </div>
    );
  }