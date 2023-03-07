import React from "react";

function Study() {
  return (
    <section id="study" className="has-background-grey-light">
      <div>
        <h1 className="has-background-primary-light is-size-1 has-text-weight-bold pl-2 has-text-grey-dark has-text-centered">
          STUDIES
        </h1>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column ">
          <div className="buttons">
            <button className="button is-white has-text-weight-medium mt-6">
              SCHOOL
            </button>
          </div>
        </div>
        <div className="column mt-6 is-two-thirds ">
          <h1 className="has-text-centered has-text-weight-medium ">
            Anuradhapura Central College
            <br />
            2012-2020
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column ">
          <div className="buttons">
            <button className="button is-white has-text-weight-medium mt-6">
              UNIVERSITY
            </button>
          </div>
        </div>
        <div className="column mt-6 is-two-thirds ">
          <h1 className="has-text-centered has-text-weight-medium ">
            University of Colombo School of Computing <br />
            2022-Present
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column ">
          <div className="buttons">
            <button className="button is-white has-text-weight-medium mt-6">
              DEGREE
            </button>
          </div>
        </div>
        <div className="column mt-6 mb-6 is-two-thirds ">
          <h1 className="has-text-centered has-text-weight-medium ">
            Bachelor of Information Systems(UCSC)
            <br />
            2022-Present
            <br />
            <p className="mt-2">
              Bachelor of Information Technology(UCSC)
              <br />
              2022-Present
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Study;
