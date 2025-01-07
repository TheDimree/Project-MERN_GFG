import {Routes, Route} from "react-router-dom"
import SignIn from "./components/signin/SignIn"
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" exact element={<SignIn/>} />
      </Routes> 
    </>
  )
}
