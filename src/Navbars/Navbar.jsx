import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "./Navbarresponsive.css";
import Advert from "../Advert/Advert";
import icon from '../Navbars/icon.png'
import cart from "../Navbars/cart.png";
import menus from "../Navbars/menu.png";
import Carousel from "../Home/Carousel";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const linked = () => {
    alert('Thanks for believing in me. I would work on these too.')
  }





  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const toggleMenu = () => {
   setMenuVisible(!isMenuVisible);
 };

 const closeMenu = () => {
   setMenuVisible(false);
 };
  

  return (
    <div className="Navbar-cons">
      <div
        className={`dropdownmenu-container ${isMenuVisible ? "appear" : ""}`}
      >
        {" "}
        <div className="wigstationlogo">
          <div>
            <img src={icon} alt="wigwonderland icon" />
            <h1>Wig Wonderland</h1>
          </div>
          <div className="Cancelmenu">
            <button onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="menu">
          <div className="menu-div">
            <ol>
              <li>
                <a onClick={linked} href="#">
                  Home
                </a>
                <span></span>
              </li>
              <li>
                <a onClick={linked} href="#servicehome">
                  Shop
                </a>
                <span></span>
              </li>

              <li>
                <a onClick={linked} href="#contact">
                  About
                </a>
                <span></span>
              </li>
              <li>
                <a onClick={linked} href="#testimonials">
                  Contact
                </a>
                <span></span>
              </li>
            </ol>

            <div className="talktosalebtn">
              <button onClick={linked} className="hires">
                <a href="">Talk to Sales </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Advert />
      <main>
        <header className={`Navbar-con ${isScrolled ? "scrolled" : ""}`}>
          <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
              <h1>Wig Wonderland</h1>
            </div>

            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="S">Shop</a>
              </li>

              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>

            <div className="dropdowncart">
              <div className="cart-container">
                <img src={cart} alt="Cart" />
                <span className="cart-count">0</span>
              </div>

              <div className="dropdown">
                {/* Corrected the function name */}
                <img onClick={toggleMenu} src={menus} alt="menu" />
              </div>
            </div>
          </nav>
        </header>
        
      </main>
      <Carousel/>
    </div>
  );
}

export default Navbar;
