import Counter from "./pages/counter";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedNavbar from "./component/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Ecommerce from "./pages/e-commerce";
import Singleproduct from "./pages/e-commerce/single-product";

function App() {
  return (
    <BrowserRouter>
     <FixedNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/ecommerce" element={<Ecommerce />}></Route>
        <Route path="/ecommerce/singleproduct" element={<Singleproduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
