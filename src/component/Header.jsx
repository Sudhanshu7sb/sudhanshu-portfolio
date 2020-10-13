import React from "react";

function Header() {
  return (
    <>
      <nav
        className="navbar is-fixed-top has-background-grey-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item mx-6" href="https://bulma.io">
            SUDHANSHU
          </a>

          <a href="#home"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          

          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#home" className="navbar-item mx-6">Home</a>

              <a href="#skills"  className="navbar-item mx-6">Skills</a>
              <a href="#projects" className="navbar-item mx-6">Projects</a>
              <a href="#contact" className="navbar-item mx-6">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
