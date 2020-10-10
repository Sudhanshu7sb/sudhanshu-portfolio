import React from "react";

function Hero() {
  return (
    <>
      <section className="hero has-background-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2 has-text-white">I'm Sudhanshu Shekhar Behera</h1>
            <h2 className="subtitle has-text-white">
              Fullstack Developer | MERN Stack Developer | Web Developer
            </h2>
            <p>
              <a href="https://github.com/Sudhanshu7sb" className="button is-small is-rounded mx-3">
                <span className="icon">
                <i className="far fa-envelope"></i>
                </span>
              </a>
              <a href="https://github.com/Sudhanshu7sb" className="button is-small is-rounded is-github mx-3">
                <span className="icon">
                  <i className="fab fa-github fa-lg"></i>
                </span>
              </a>
              <a href="##" className="button is-small  is-rounded is-twitter mx-3">
                <span className="icon">
                  <i className="fab fa-twitter "></i>
                </span>
              </a>
              <a href="##" className="button is-small  is-rounded is-linkedin mx-3">
                <span className="icon">
                  <i className="fab fa-linkedin fa-lg"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
