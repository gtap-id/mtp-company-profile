import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailCategory from "./pages/product/DetailCategory";
import NotFound from "./pages/NotFound";
import { Gallery as Galleries } from "./components";
import Layout from "./Layout";
import Gallery from "./pages/galleries/Gallery";
import DetailProduct from "./pages/product/DetailProduct";
import DetailSubCategory from "./pages/product/DetailSubCategory";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:categoryId/:subCategoryId/:productId"
              element={<DetailProduct />}
            />
            <Route path="/product/category/:categoryId/:subCategoryId" element={<DetailSubCategory />} />
            <Route
              path="/product/:categoryId/:productId"
              element={<DetailProduct />}
            />
            <Route path="/product/category/:id" element={<DetailCategory />} />
            <Route path="/gallery" element={<Galleries />} />
            <Route path="/gallery/:id" element={<Gallery />} />
            <Route path="/notfound" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
