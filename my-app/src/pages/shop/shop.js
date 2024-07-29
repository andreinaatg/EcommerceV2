import { useEffect, useState } from "react";
import './shop.css';
import ProductDetail from "../../components/productDetail/productDetail";

function Shop() {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to store the current filter for products
  const [filter, setFilter] = useState('');
  // State to store the selected product for detailed view
  const [selectedProduct, setSelectedProduct] = useState(null);

  // useEffect hook to fetch products when the component mounts or the filter changes
  useEffect(() => {
    fetchProducts();
  }, [filter]);

  // Function to fetch products from the API based on the current filter
  function fetchProducts() {
    const endpoint = filter ? `/api/items/type/${filter}` : '/api/items';
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  // Function to handle clicking on a product
  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  // Function to display the list of products
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
        // If a product is selected, display the product details
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        // Otherwise, display the list of products
        displayProducts(products)
      )}
    </main>
  );
}

export default Shop;
