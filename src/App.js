import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} exact></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products" Component={ProductPage}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
