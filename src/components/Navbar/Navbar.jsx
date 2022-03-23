import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export const Navbar = () => {
  const [check, setCheck] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input type="checkbox" name="" id="check" checked = {check} onChange = {() => setCheck(!check)}/>
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul className="menu">
          <li className="menu__item">
            <Link to="home" smooth={true} duration={400} onClick = {() => setCheck(!check)}>
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="aboutMe" smooth={true} duration={400} onClick = {() => setCheck(!check)}>
              About me
            </Link>
          </li>
          <li className="menu__item">
            <Link to="skills" smooth={true} duration={400} onClick = {() => setCheck(!check)}>
              Skills
            </Link>
          </li>
          <li className="menu__item">
            <Link to="portfolio" smooth={true} duration={400} onClick = {() => setCheck(!check)}>
              Portfolio
            </Link>
          </li>
          <li className="menu__item">
            <Link to="contacts" smooth={true} duration={400} onClick = {() => setCheck(!check)}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
