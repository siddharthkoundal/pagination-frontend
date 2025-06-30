import { useEffect, useState } from 'react';
import './App.css';
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

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1) % totalPages);
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }

  return !products.length ? <h1>No Products Found</h1> : (
    <div>
      <h1>Products</h1>
      <div className='pagination-container'>
        <button
          style={{ padding: '5px', margin: '5px', cursor: 'pointer' }}
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          ⬅️
        </button>
        {[...Array(totalPages).keys()].map((n) => (
          <span
            key={n}
            className={`page-number${currentPage === n ? ' active' : ''}`}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </span>
        ))}
        <button
          style={{ padding: '5px', margin: '5px', cursor: 'pointer' }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          ➡️
        </button>
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