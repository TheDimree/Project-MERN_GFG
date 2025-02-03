import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/ProductServices';
import ProductsList from './ProductsList';
// import Item from '@mui/material/Item';

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(response => {
        setProducts(response.data.products)
        setLoading(false)
        // console.log(response.data.products)
      })
      .catch(err => console.log(err))
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <>
      <ProductsList products={products} setProducts ={setProducts} />
    </>

  )
}

export default ProductsPage
