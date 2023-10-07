import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import CatLayout from "./hoc/catlayout/CatLayout";
import AddCategory from "./components/pages/category/AddCategory";
import ViewCategory from "./components/pages/category/ViewCategory";
import AddProduct from "./components/pages/product/AddProduct";
import ViewProduct from "./components/pages/product/ViewProduct";
import ProductLayout from "./hoc/productlayout/ProductLayout";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/category" element={<CatLayout />}>
              <Route path="addcat" element={<AddCategory />} />
              <Route path="viewcat" element={<ViewCategory />} />
            </Route>
            <Route path="/product" element={<ProductLayout />}>
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="viewproduct" element={<ViewProduct />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
