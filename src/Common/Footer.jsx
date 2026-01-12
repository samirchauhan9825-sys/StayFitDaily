import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        <footer>
          {/* ? services-area */}
          <section className="services-area">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="single-services mb-40 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s"
                  >
                    <div className="features-icon">
                      <img src="assets/img/icon/icon1.svg" />
                    </div>
                    <div className="features-caption">
                      <h3>Location</h3>
                      <p>Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="single-services mb-40 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <div className="features-icon">
                      <img src="assets/img/icon/icon2.svg" />
                    </div>
                    <div className="features-caption">
                      <h3>Phone</h3>
                      <p>+91 90277 27825</p>
                      <p>+91 78267 25625</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                  <div
                    className="single-services mb-40 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay=".4s"
                  >
                    <div className="features-icon">
                      <img src="assets/img/icon/icon3.svg" />
                    </div>
                    <div className="features-caption">
                      <h3>Email</h3>
                      <p>support@fitzone.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*? Footer Start*/}
          <div className="footer-area black-bg">
            <div className="container">
              <div className="footer-top footer-padding">
                {/* Footer Menu */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-footer-caption mb-50 text-center">
                      {/* logo */}
                      <div
                        className="footer-logo wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay=".2s"
                      >
                        <a href="index.html">
                          <img src="assets/img/logo/logo2_footer.png" />
                        </a>
                      </div>
                      {/* Menu */}
                      {/* Header Start */}
                      <div
                        className="header-area main-header2 wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay=".4s"
                      >
                        <div className="main-header main-header2">
                          <div className="menu-wrapper menu-wrapper2">
                            {/* Main-menu */}
                            <div className="main-menu main-menu2 text-center">
                              <nav>
                                <ul>
                                  <li>
                                    <Link to={"/"}>Home</Link>
                                  </li>
                                  <li>
                                    <Link to={"/about"}>About</Link>
                                  </li>
                                  <li>
                                    <Link to={"/exelist"}>Execrcise</Link>
                                  </li>
                                  <li>
                                    <Link to={"/gallery"}>Gallery</Link>
                                  </li>
                                  <li>
                                    <Link to={"/contact"}>Contact</Link>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Header End */}
                      {/* social */}
                      <div
                        className="footer-social mt-30 wow fadeInUp"
                        data-wow-duration="3s"
                        data-wow-delay=".8s"
                      >
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="https://bit.ly/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12">
                    <div className="footer-copy-right text-center">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
