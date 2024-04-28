
import Logo from "../../images/alabs_layout/Asset 1.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navabar.css";
const Navbar = () => {
  const [isNavbarShown, setNavbar] = useState(false);

  const handleShowNavbar = (index) => {
    setNavbar(!isNavbarShown);
  };
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className={`navigation ${isNavbarShown ? "active" : ""}`}>
          <p className="close-icon" id="close-icon" onClick={handleShowNavbar}>
            &times;
          </p>
          <ul className="nau_ul flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="https://wa.me/254794878861" target="_blank">Book with us</Link>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <p>
            <i className="fa fa-solid fa-bars"></i>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
