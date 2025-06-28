import { useEffect, useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    setProducts(json.products);
    console.log(json.products);
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
        ))}
      </div>
    </div>
  )
}

export default App
