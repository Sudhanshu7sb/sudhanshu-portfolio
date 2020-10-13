import React from "react";

function Header() {
  return (
    <>
      <nav
        className="navbar is-fixed-top has-background-grey-light" id="hero"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item mx-6" href="#home">
            SUDHANSHU
          </a>

          <div className="navbar-burger burger" href="#hero">
            <div className="dropdown is-right is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="navbar-burger burger navbar-right"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content has-background-grey-light">
                  <div className="dropdown-item ">
                    <a
                      href="#home"
                      className="navbar-item mx-6"
                    >
                      Home
                    </a>
                    <a href="#skills" className="navbar-item mx-6">
                      Skills
                    </a>
                    <a href="#projects" className="navbar-item mx-6">
                      Projects
                    </a>
                    <a href="#footer" className="navbar-item mx-6">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#home" className="navbar-item mx-6">
                Home
              </a>

              <a href="#skills" className="navbar-item mx-6">
                Skills
              </a>
              <a href="#projects" className="navbar-item mx-6">
                Projects
              </a>
              <a href="#footer" className="navbar-item mx-6">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
