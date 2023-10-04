// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo555.png";
import menuLogo from "../../assets/menuL.png";
import contactImg from "../../assets/contact.png";
import { Theme } from "../../context/Context";

import { AiFillAlert } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const NavBar = () => {
  const { light, setLight } = useContext(Theme);
  const [menu, showMenu] = useState(false);
  return (
    <nav
      className="navbar"
      style={{
        // background: light ? "white" : "rgb(30, 30, 30)",
        color: "white",
      }}
    >
      <Link
        activeClass="kjh"
        to="intro"
        spy={true}
        offset={-100}
        smooth={true}
        duration={700}
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={700}
          className="desktopMenuListItems"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="desktopMenuListItems"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projectSection"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="desktopMenuListItems"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItems"
        >
          Experience
        </Link>
      </div>
      <div className="navBtn">
        <button
          className="toggleBtn"
          onClick={() => {
            setLight(!light);
          }}
        >
          {light ? <BsSun size={25} /> : <MdDarkMode size={28} />}
        </button>

        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </div>
      <img
        src={menuLogo}
        alt="logo"
        className="Mobmenu"
        onClick={() => showMenu(!menu)}
      />
      <div className="navMenu" style={{ display: menu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={700}
          className="ListItems"
          onClick={() => {
            showMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="ListItems"
          onClick={() => {
            showMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projectSection"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
          className="ListItems"
          onClick={() => {
            showMenu(false);
          }}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="exp"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItems"
          onClick={() => {
            showMenu(false);
          }}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItems"
          onClick={() => {
            showMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
