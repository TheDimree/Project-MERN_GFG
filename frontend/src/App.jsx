import { Routes, Route } from "react-router-dom"
import SignIn from "./components/signin/SignIn"
import SignUp from "./components/signup/SignUp"
import Dashboard from "./components/dashboard/dashboard"
import Products from "./components/products/ProductsPage"
import AddProduct from "./components/products/AddProduct"
import Cart from "./components/cart/Cart"
import { AdminProtectedRoutes, ProtectedRoutes } from "./components/Routes/RoutesProtection"
import EditProduct from "./components/products/EditProduct"
export default function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        {/* // * Internal Routes: /dashboard/:route = it also displays the dashboard, i.e., navbar */}
        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>}>
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="addproduct" element={
            <AdminProtectedRoutes>
              <AddProduct />
            </AdminProtectedRoutes>} />
          <Route path="editproduct/:id" element={
            <AdminProtectedRoutes>
              <EditProduct />
            </AdminProtectedRoutes>} />
        </Route>



      </Routes >
    </>
  )
}
