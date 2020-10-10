import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer has-background-grey-light py-3">
      <div className="content has-text-centered">
        <p>
          <strong className="is-size-4">Sudhanshu @ </strong> 
          <a href="https://github.com/Sudhanshu7sb" className="button is-small is-rounded is-github mx-2">
            <span className="icon">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </a>
          <a href="##" className="button is-small is-rounded is-linkedin mx-2">
            <span className="icon">
              <i className="fab fa-linkedin fa-lg"></i>
            </span>
          </a>
          <a href="##" className="button is-small is-rounded is-twitter mx-2">
            <span className="icon">
              <i className="fab fa-twitter fa-lg"></i>
            </span>
          </a>
          <a href="##" className="button is-small is-rounded  mx-2">
            <span className="icon">
            <i className="far fa-envelope"></i>
            </span>
          </a>
          
        </p>
      </div>
    </footer>
  );
}

export default Footer;
