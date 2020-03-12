import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    let template_params = {
      subject: subject,
      from_name: name,
      from_email: email,
      message: message
    };

    let service_id = "gmail";
    let template_id = "template_2HUVgYyI";
    let user_id = "user_sTfKBqVJEdqFcb6znKwcg";
    emailjs.send(service_id, template_id, template_params, user_id).then(
      result => alert("SUCCESS!", result.status, result.text),
      err => alert("ERROR!", err)
    );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  render() {
    return (
      <div>
        <section className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="colorlib-icon">
                    <i className="icon-mail" />
                  </div>
                  <div className="colorlib-text">
                    <p>
                      <a href="mailto: danielmimoun98@gmail.com">
                        danielmimoun98@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="colorlib-icon">
                    <i className="icon-map" />
                  </div>
                  <div className="colorlib-text">
                    <p>Israel, Petah Tikva</p>
                  </div>
                </div>

                <div
                  className="colorlib-feature colorlib-feature-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div>
                    <img src="images/tenor.gif" alt="tenor" />
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div
                    className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <form action="" onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          value={this.state.subject}
                          onChange={this.onChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          className="form-control"
                          placeholder="Message"
                          value={this.state.message}
                          onChange={this.onChange}
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btn btn-primary btn-send-message"
                          value="Send Message"
                        />
                      </div>
                    </form>
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
