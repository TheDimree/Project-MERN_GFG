import { useEffect } from 'react'
import { getAllProducts } from '../services/ProductServices'

const Products = () => {
  useEffect(() => {
    getAllProducts()
      .then(response=> console.log(response.data.msg))
      .catch(err => console.log(err))
    
  },[])
  return (
    <div>
      Products
    </div>
  )
}

export default Products
