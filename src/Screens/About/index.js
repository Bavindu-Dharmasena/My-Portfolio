import React from "react";

function About() {
  return (
    <section id="about" className="has-background-warning">
      <div className="hero is-fullheight-with-navbar">
        <div className="columns is-full is-vcentered">
          <div className="column">
            <img src="img/about-me.jpg" className="img1 ml-6 mt-6" />
          </div>
          <div className="column is-half">
            <div className="columns is-vertical">
              <div className="column is-full">
                <h1 className="has-background-danger is-size-1 has-text-weight-bold pl-2 has-text-white">
                  ABOUT ME
                </h1>
                <h1 className="is-size-4 has-text-weight-light has-text-dark pt-4">
                  To find an entry point to the industry of Information
                  Technology to work in a dynamic professional environment with
                  a growing organization and utilize my knowledge and skills for
                  the benefit of the organization and myself.
                </h1>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
