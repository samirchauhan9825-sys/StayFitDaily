import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  return (
    <>
      <header>
  {/* Header Start */}
  <div className="header-area header-transparent">
    <div className="main-header header-sticky">
      <div className="container-fluid">
                   <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>

                {/* Hamburger Button (Mobile) */}
                <button
                  className="menu-toggle d-lg-none border-0 bg-transparent"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ☰
                </button>

                {/* Main Menu */}
                <div
                  className={`${
                    menuOpen ? "d-block" : "d-none"
                  } main-menu d-lg-block`}
                >
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      {/* Dropdown Menu */}
                      <li
                        className="has-submenu"
                        onMouseOver={() => setSubOpen(!subOpen)}
                      >
                        <Link to="/exelist">Exercise</Link>

                        <ul
                          className={`submenu ${
                            subOpen ? "d-block" : "d-none"
                          }`}
                        >
                          <li>
                            <Link to="/bodypart">Bodypart</Link>
                          </li>
                          <li>
                            <Link to="/equipment">Equipment</Link>
                          </li>
                          <li>
                            <Link to="/target">Target</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Header Button */}
                {/* <div className="header-btns d-none d-lg-block f-right">
                  <Link to="/contact" className="btn">
                    Contact me
                  </Link>
                </div> */}
              </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>
{/* 
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                Logo
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>

                Hamburger Button (Mobile)
                <button
                  className="menu-toggle d-lg-none border-0 bg-transparent"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ☰
                </button>

                Main Menu
                <div
                  className={`${
                    menuOpen ? "d-block" : "d-none"
                  } main-menu d-lg-block`}
                >
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      Dropdown Menu
                      <li
                        className="has-submenu"
                        onClick={() => setSubOpen(!subOpen)}
                      >
                        <Link to="/exelist">Exercise</Link>

                        <ul
                          className={`submenu ${
                            subOpen ? "d-block" : "d-none"
                          }`}
                        >
                          <li>
                            <Link to="/bodypart">Bodypart</Link>
                          </li>
                          <li>
                            <Link to="/equipment">Equipment</Link>
                          </li>
                          <li>
                            <Link to="/target">Target</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                Header Button
                <div className="header-btns d-none d-lg-block f-right">
                  <Link to="/contact" className="btn">
                    Contact me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
}

export default Header;
