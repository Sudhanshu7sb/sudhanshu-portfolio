import React from "react";

function Header() {
  return (
    <>
      <nav
        class="navbar is-fixed-top has-background-grey-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item mx-6" href="https://bulma.io">
            SUDHANSHU
          </a>

          <a href="#home"
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
              <a href="#home" class="navbar-item mx-6">Home</a>

              <a href="#skills"  class="navbar-item mx-6">Skills</a>
              <a href="#projects" class="navbar-item mx-6">Projects</a>
              <a href="#contact" class="navbar-item mx-6">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
