import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";

import Home from "./pages/dashboard/home/Index";
import CreateProduct from "./pages/dashboard/product/Create";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";
import IndexCategory from "./pages/dashboard/category/Index";
import CreateCategory from "./pages/dashboard/category/Create";
import IndexProduct from "./pages/dashboard/product/Index";
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./pages/frontEnd/home/Index";
import SingleProductIndex from "./pages/frontEnd/product/Index";
import CartDetails from "./pages/frontEnd/cartDetails/CartDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomeIndex />} />
        <Route path="single-product/:id" element={<SingleProductIndex />} />
        <Route path="cart-details" element={<CartDetails />} />
      </Route>

      {/*  Auth Route; */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route element={<Private />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />

          {/* ============ Category ============= */}
          <Route path="index-category" element={<IndexCategory />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="edit-category/:id" element={<CreateCategory />} />

          {/* ============= Product ============= */}
          <Route path="index-product" element={<IndexProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="edit-product/:id" element={<CreateProduct />} />

          {/* Error */}
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
