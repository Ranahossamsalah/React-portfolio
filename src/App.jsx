import Counter from "./pages/counter";
import "bootstrap/dist/css/bootstrap.min.css";
import FixedNavbar from "./component/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Ecommerce from "./pages/e-commerce";
import Singleproduct from "./pages/e-commerce/single-product";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <FixedNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/ecommerce" element={<Ecommerce />}></Route>
        <Route path="/ecommerce/:id" element={<Singleproduct />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
