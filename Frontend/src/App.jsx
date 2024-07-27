// import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import AddProduct from "./component/AddProduct.jsx";
import EditProduct from "./component/EditProduct.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
