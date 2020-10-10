import React from "react";

function Header() {
  return (
    <>
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">
              <h1 className="is-size-4">SUDHANSHU</h1>
            </a>
          </div>

          <div className="navbar-end">
            <a href="home" className="navbar-item mx-5">Home</a>

            <a href="#skills" className="navbar-item mx-5">Skills</a>
            <a href="#projects" className="navbar-item mx-5">Projects</a>

            <a href="#footer" className="navbar-item mx-5">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
