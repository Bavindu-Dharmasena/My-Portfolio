import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <a className="navbar-item" href="https://bulma.io">
        <img src="Logo/logo-w.png" width="100%" />
      </a>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <span className="icon is-medium">
              <a href="https://www.facebook.com/BavinduBimsara">
                <i className="fa-brands fa-facebook fa-lg" aria-hidden="true" />
              </a>
            </span>
            <span className="icon is-medium">
              <a href="https://www.linkedin.com/in/bavindu-dharmasena-551652165">
                <i className="fa-brands fa-linkedin fa-lg" />
              </a>
            </span>
            <span className="icon is-medium">
              <a href="https://www.instagram.com/bavindu_bimsara">
                <i className="fa-brands fa-instagram fa-lg" />
              </a>
            </span>
            <span className="icon is-medium">
              <a href="https://twitter.com/BavinduBimsara">
                <i className="fa-brands fa-twitter fa-lg" />
              </a>
            </span>
          </div>
          <div id="mySidenav" className="sidenav">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onclick="closeNav()"
            >
              ×
            </a>
            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#study">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </div>
          <span
            style={{
              fontSize: "30px",
              cursor: "pointer",
              paddingRight: "15px",
              paddingTop: "2px",
            }}
            onclick="openNav()"
          >
            ☰
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
