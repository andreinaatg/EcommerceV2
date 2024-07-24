import { useEffect, useState } from "react";
import './shop.css';
import ProductDetail from "../../components/productDetail/productDetail";
function Shop() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  function fetchProducts() {
    const endpoint = filter ? `/api/items/type/${filter}` : '/api/items';
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  function displayProducts(products) {
    return (
      <>
        <h1 className="title">Best Sellers</h1>
        <div className="filter-buttons">
          <button onClick={() => setFilter('')}>All</button>
          <button onClick={() => setFilter('cleanser')}>Cleanser</button>
          <button onClick={() => setFilter('cream')}>Creams</button>
          <button onClick={() => setFilter('toner')}>Toners</button>
          <button onClick={() => setFilter('serum')}>Serum</button>
        </div>
        <div className="product-container">
          {products.map((product, i) => (
            <div key={i} className="product" onClick={() => handleProductClick(product)}>
              <img src={product.img} alt={product.name} className="image" />
              <div className="brand-icon">
                <h3>{product.brand}</h3>
                <img src="images/bag-icon.png" alt="bag-icon" className="icon" />
              </div>
              <p className="description">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <main>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        displayProducts(products)
      )}
    </main>
  );
}

export default Shop;
