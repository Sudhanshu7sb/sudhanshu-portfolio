import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer has-background-info py-3">
      <div className="content has-text-centered">
        <p>
          <small className="is-size-6">Sudhanshu @ </small> 
          <a href="https://github.com/Sudhanshu7sb" className="py-3 px-3 button is-small is-rounded is-github mx-2">
            <span className="icon">
              <i className="fab fa-github fa-lg"></i>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/sudhanshu-shekhar-behera-b10b27128/" className="py-3 px-3 button is-small is-rounded is-linkedin mx-2">
            <span className="icon">
              <i className="fab fa-linkedin fa-lg"></i>
            </span>
          </a>
          <a href="https://twitter.com/Sudhanshu7sb" className="py-3 px-3 button is-small is-rounded is-twitter mx-2">
            <span className="icon">
              <i className="fab fa-twitter fa-lg"></i>
            </span>
          </a>
          <a href="mailto: sudhanshu7sb@gmail.com" className="py-3 px-3 button is-small is-rounded  mx-2">
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
