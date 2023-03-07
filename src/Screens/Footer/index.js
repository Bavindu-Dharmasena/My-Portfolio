import React from "react";

function Footer() {
  return (
    <section className="mt-6">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="img/home-me.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Bavindu Bimsara</strong> <small>@bavindubimsara</small>
                <br />
                If you have any questions or need to contact me, please do not
                hesitate to do so, I will be happy to talk to any of you. I
                leave you my phone number as an addition to my email.{" "}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fa-solid fa-envelope"> </i>
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fa-solid fa-phone" />
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fa-brands fa-linkedin-in" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Footer;
