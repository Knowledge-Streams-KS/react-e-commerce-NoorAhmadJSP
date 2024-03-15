import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/header/Header";
import PrivateRoutes from "./components/Routes/PrivateRoutes";
import Cart from "./components/Cart";
import LogIn from "./components/Login";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Product />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/productdetails/:id?" element={<ProductDetails />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route
          path="/private"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }></Route>
      </Routes>
    </>
  );
}

export default App;
