import {Routes, Route} from "react-router-dom"
import SignIn from "./components/signin/SignIn"
import SignUp from "./components/signup/SignUp"
import Dashboard from "./components/dashboard/dashboard"
import Products from "./components/products/Products"
import AddProduct from "./components/products/AddProduct"
import Cart from "./components/cart/Cart"
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="products" element={<Products />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes> 
    </>
  )
}
