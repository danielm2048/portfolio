import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <strong>Hi i'm Daniel Mimoun</strong>
                        <br />
                        Ever since I can remember myself i've been around
                        computers. I just love them so much!
                        <br />
                        In high school I decided to learn Computer Science and
                        Software Engineering to see if I care for that side of
                        the computer spectrum, and truly it was a match.
                        <br />
                        After graduation I got enrolled into the IDF as a
                        warrior at the 405 battalion(Tothanim - Artillery
                        Corps).
                        <br />I became the Head of Computers and Information
                        Technology Manager at my unit, a job really taxing but
                        also enjoyable.
                      </p>
                      <p>
                        Now i'm searching for my next adventure!
                        <br />
                        Would love a place where I can shine and really give my
                        100% :P{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-globe-outline" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites using JavaScript,
                      React, Redux, HTML ,CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      As coming from the CS background, I have good grasp over
                      fundamental concepts of DSA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Databses</h3>
                    <p>
                      I have some knowledge of SQL but mostly NoSQL with the
                      most experience in MongoDB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-cog" />
                  </span>
                  <div className="desc">
                    <h3>Microservices</h3>
                    <p>
                      Have experience with creating and intergrating
                      Microservices and API
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Design</h3>
                    <p>
                      Loves to make Classic and modern designes - what's best
                      for the user experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-windows8" />
                  </span>
                  <div className="desc">
                    <h3>Information Technology</h3>
                    <p>
                      During my time in the IDF I gained expertise in MS Office,
                      Exchange, Active Directory and the Windows OS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
