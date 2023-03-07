import React from "react";

function Home() {
  return (
    <section id="home">
      <div className="hero is-fullheight-with-navbar">
        <div className="columns is-full is-vcentered">
          <div className="column">
            <img src="img/home-me.png" className="img1" />
          </div>
          <div className="column is-half">
            <div className="columns is-vertical">
              <div className="column is-full">
                <h1 className="has-background-primary is-size-1 has-text-weight-bold pl-2">
                  Hello,
                </h1>
                <h1 className="is-size-1 has-text-weight-bold has-text-primary-light">
                  I'm Bavindu Bimsara{" "}
                </h1>
                <h1 className="is-size-4 has-text-weight-bold has-text-warning">
                  Web designer &amp; Software Developer
                </h1>
                <div className="buttons">
                  <button className="button is-danger mt-3 has-text-weight-bold is-rounded">
                    Read more
                  </button>
                </div>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
