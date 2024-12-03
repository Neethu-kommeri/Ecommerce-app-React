import React, { useState, useEffect } from 'react';
import './Home.css';
import { getAllProducts } from '../../ApiService/Api';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data || []); // Ensure fallback to an empty array if data is undefined
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product" key={product.id}> {/* Ensure unique key */}
            <img src={product.image} alt={product.title || 'Product'} />
            <h2>{product.title}</h2>
            <p>
              <span className="price">${product.price || 'N/A'}</span>
            </p>


            <Link to ={ `/product/${product.id}`}>
            <button>Product Details</button>
            </Link>
            
          </div>
        ))
      ) : (
        <p>No products available.</p> /* Fallback if products array is empty */
      )}
    </div>
  );

  function handleProductDetails(id) {
    console.log(`Product ID: ${id}`);
    // Add logic for handling product details, e.g., navigating to a details page
  }
}

export default Home;
