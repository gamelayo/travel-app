import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };

  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>BEACHES</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destination" smooth={true} duration={500}>
          <li>Destination</li>
        </Link>
        <Link to="carousel" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BsPerson className="icon" />
      </div>
      <div className="hamburger-menu">
        {nav ? (
          <AiOutlineClose color="black" className="icon" onClick={handleNav} />
        ) : (
          <HiOutlineMenuAlt4 className="icon" onClick={handleNav} />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li onClick={closeNav}>Home</li>
          </Link>
          <Link to="destination" smooth={true} duration={500}>
            <li onClick={closeNav}>Destination</li>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <li onClick={closeNav}>Travel</li>
          </Link>
          <Link to="search" smooth={true} duration={500}>
            <li onClick={closeNav}>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500}>
            <li onClick={closeNav}>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
