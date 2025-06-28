import { useEffect, useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [])

  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    setProducts(json.products);
  }

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }

  return !products.length ? <h1>No Products Found</h1> : (
    <div>
      <h1>Products</h1>
      <div className='pagination-container'>
        {[...Array(totalPages).keys()].map((n) => (
          <span
            key={n}
            className={`page-number${currentPage === n ? ' active' : ''}`}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </span>
        ))}
      </div>
      <div className="products-grid">
        {products.slice(start, end).map((product) => (
          <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
        ))}
      </div>
    </div>
  )
}

export default App