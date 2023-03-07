import React from "react";

function Job() {
  return (
    <section id="job" className="is-size-4">
      <div>
        <h1 className="has-background-black-bis is-size-1 has-text-weight-bold pl-2 has-text-white-bis has-text-centered">
          JOB EXPERIENCE
        </h1>
      </div>
      <div>
        <div className="columns">
          <div className="column mt-6 ml-6">
            <h1 className="has-text-white has-text-centered">
              Infinity Designs <br />
              (2022 - Present){" "}
            </h1>
          </div>
          <div className="column mt-6 mr-4">
            <span className="icon-text">
              <span className="icon has-text-white has-text-centered">
                <i className="fas fa-arrow-right" />
              </span>
            </span>
          </div>
          <div className="column is-half mt-6">
            <div className="tile">
              <article className="tile is-child notification is-primary">
                <p className="title">Graphic Designer</p>
                <div className="is-size-5">
                  <p>Video editing</p>
                  <p>Banners</p>
                  <p>Post</p>
                  <p>Cover pages</p>
                  <p>Cover photos</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="columns">
          <div className="column mt-6 ml-6">
            <h1 className="has-text-white has-text-centered">
              Hela Script <br />
              (2018 -2022){" "}
            </h1>
          </div>
          <div className="column mt-6 mr-4">
            <span className="icon-text">
              <span className="icon has-text-white has-text-centered">
                <i className="fas fa-arrow-right" />
              </span>
            </span>
          </div>
          <div className="column is-half mt-6">
            <div className="tile">
              <article className="tile is-child notification is-primary">
                <p className="title">Web Developer</p>
                <div className="is-size-5">
                  <p>Web page design</p>
                  <p>Flyer design</p>
                  <p>Database Management</p>
                  <p>Back-end Developing</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Job;
