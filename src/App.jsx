import { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import { PAGE_SIZE } from './constants';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    setProducts(json.products);
  };

  const handlePageChange = (n) => setCurrentPage(n);
  const handlePrevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const handleNextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);

  return !products.length ? <h1>No Products Found</h1> : (
    <div>
      <h1>Products</h1>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
      <div className="products-grid">
        {products.slice(start, end).map((product) => (
          <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
        ))}
      </div>
    </div>
  );
}

export default App;