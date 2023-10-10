import { Link } from "react-router-dom";
import Home from "../pages/Home";
import "./Navigation.css";

function Navigation() {
  const flex = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <nav style={flex} className="navbar">
      <logo>
        <Link to="/" Component={Home}>
          <img
            src="/images/logo.png"
            alt="LOGO"
            style={{ height: "145px" }}
            className="logo"
          ></img>
        </Link>
      </logo>
      <ul style={flex} className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li style={flex} className="cartColor">
          <span style={{ padding: "5px 0px" }}>10</span>
          <Link to="/cart">
            <img
              src="images/cart.png"
              alt="CART"
              style={{ height: "35px", marginLeft: "10px" }}
              className="smalltImageCart"
            ></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
