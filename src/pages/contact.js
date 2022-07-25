import React, { Component } from "react"
import styled from "styled-components"
import { SEO } from "../components/seo"

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }




  handleSubmit(event) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    event.preventDefault();
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <ContactSection>
        <section className="section-contact">
          <div className="u-center-text">
            <h2 className="heading-secondary" id="contact-me">
              Contact Me
            </h2>
          </div>

          <div className="form-container">
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <label>
                Name<span className="asterisk">*</span>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-text"
                  data-sal="slide-left"
                  data-sal-delay="0"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                />
              </label>

              <label>
                Email<span className="asterisk">*</span>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-text"
                  data-sal="slide-left"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                />
              </label>

              <label>
                Subject<span className="asterisk">*</span>
                <input
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  className="form-text"
                  data-sal="slide-left"
                  data-sal-delay="200"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                />
              </label>
              <label>
                Message<span className="asterisk">*</span>
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  className="form-text form-textarea"
                  data-sal="slide-left"
                  data-sal-delay="300"
                  data-sal-easing="ease"
                  data-sal-duration="500"
                />
              </label>
              <div className="center-submit">
                <button type="submit" className="form-submit">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </section>
      </ContactSection>
    )
  }
}

export const Head = () => (
  <SEO />
)

const ContactSection = styled.section`
  .section-contact {
    background-color: #181e2e;
    padding: 10rem 0 5rem 0;
    color: white;
    @media (max-width: 56.25em) {
      padding: 10rem 2rem;
    }
  }

  .heading-secondary {
    font-size: 5.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding: 0 0 15rem 0;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 56.25em) {
      padding: 0 0 0rem 0;
      font-size: 4rem;
    }
  }

  .u-center-text {
    text-align: center;
  }

  .form-container {
    border-radius: 5px;
    background-color: #181e2e;
    padding: 2rem 0 2rem 0;
    margin: 0 auto;
    color: white;
    font-size: 2rem;
    max-width: 55rem;
  }

  .asterisk {
    color: red;
  }

  .form-text {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 2rem;
    margin-bottom:2.5rem;
    font-family: "Lato", sans-serif;
  }

  .form-textarea {
    height: 15rem;
  }

  .center-submit {
    text-align: center;
  }

  .form-submit {
    width: 30%;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    color: white;
    padding: 1.5rem 1.5rem;
    margin: 1rem 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 2rem;
    min-width: 8rem;
    transition: all 0.4s;

    @media (hover: hover) {
      &:hover {
        background-image: linear-gradient(
          to right bottom,
          rgb(86, 171, 216),
          rgb(101, 116, 204)
        );
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
        border-radius: 4px;
      }
    }

    &:active {
      box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.2);
      transform: translateY(0);
    }
  }

  .img-container {
    width: 35rem;
    height: 35rem;
    border-radius: 5px;
    margin: 0 auto;
    padding-top: 5rem;
  }
`