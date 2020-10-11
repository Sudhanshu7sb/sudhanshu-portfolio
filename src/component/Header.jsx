import React from "react";

function Header() {
  return (
    <>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            SUDHANSHU
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item mx-6">Home</a>

              <a class="navbar-item mx-6">Skills</a>
              <a class="navbar-item mx-6">Projects</a>
              <a class="navbar-item mx-6">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
{
  /* <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#home">
              <h1 className="is-size-4">SUDHANSHU</h1>
            </a>
          </div>

          <div className="navbar-end">
            <a href="#home" className="navbar-item mx-5">
              Home
            </a>

            <a href="#skills" className="navbar-item mx-5">
              Skills
            </a>
            <a href="#projects" className="navbar-item mx-5">
              Projects
            </a>

            <a href="#footer" className="navbar-item mx-5">
              Contact
            </a>
          </div>
        </div>
      </nav> */
}
