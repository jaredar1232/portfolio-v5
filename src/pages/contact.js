import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      attemptCount: 0,
      hideForm: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormInputs = this.handleFormInputs.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  // clears a form field when selected
  handleClear(e) {
    document.getElementById(`${e.target.id}`).value = ""
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  // returns true if empty otherwise updates the first empty field to a new message
  handleFormInputs() {
    // define possible "empty" entries
    let empty = [
      "",
      "Please fill me out",
      "All of me",
      "Srsly?? Try that again...",
      "hide",
    ]

    // define each field
    let possibleFieldValues = [
      this.state.name,
      this.state.email,
      this.state.subject,
      this.state.message,
    ]

    // loop over field values and check if they're equal to an empty value / phrase
    for (let i = 0; i < possibleFieldValues.length; i++) {
      let currentFieldValue = possibleFieldValues[i]

      if (
        currentFieldValue === empty[0] ||
        currentFieldValue === empty[1] ||
        currentFieldValue === empty[2] ||
        currentFieldValue === empty[3]
      ) {
        // alert the first time a form isn't filled out (incase form isnt in full mobile view)
        if (this.state.attemptCount === 0) {
          alert("Please fill out the form")
        }

        // determine next empty message based on attemptCount
        let nextFill = empty[this.state.attemptCount + 1]

        // increment empty count
        this.setState(prevState => {
          return { attemptCount: prevState.attemptCount + 1 }
        })

        let possibleField = ["name", "email", "subject", "message"]

        // set a field to an empty message depending on how many attempts
        this.setState({
          [possibleField[i]]: nextFill,
        })

        if (nextFill === "hide") {
          this.setState({
            hideForm: true,
          })
        }
        // there is still an empty field
        return true
      }
    }

    // all fields have been filled out
    return false
  }

  // checks for blank fields, then for valid email, then submits
  handleSubmit(event) {
    event.preventDefault()
    // if (this.handleFormInputs()) {
    //   // only submits when a false isnt thrown for an empty message
    // } else if (!/^([a-zA-Z0-9]+@[a-zA-Z]+\.com){1}$/.test(this.state.email)) {
    //   alert("Please enter a valid email")
    // } else {
    //   alert("Message Submitted!")
    //   axios
    //     .post(
    //       "https://jared-rothenberg-portfolio-ser.herokuapp.com/api",
    //       // "http://localhost:1232/api",
    //       {
    //         name: this.state.name,
    //         email: this.state.email,
    //         subject: this.state.subject,
    //         message: this.state.message,
    //       },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //     .then(function (response) {
    //       console.log(response)
    //     })
    //     .catch(function (error) {
    //       console.log(
    //         "Disregard cors/post error: your message was submitted through a proxy server :)"
    //       )
    //     })
    //   this.setState({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    //   })
    // }
  }

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

        {/* {this.state.hideForm ? (
          <section className="section-contact">
            <div className="img-container">
              <img className="hideform-img" src={`/HideForm.png`}></img>
            </div>
            <div className="hideform-text">
              This isn't the form you're looking for... move along...
            </div>
          </section>
        ) : (
          <section className="section-contact">
            <div className="u-center-text">
              <h2 className="heading-secondary" id="contact-me">
                Contact Me
              </h2>
            </div>

            <div className="form-container">
              <form onSubmit={this.handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label>
                  Name<span className="asterisk">*</span>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className="form-text"
                    id="name"
                    onClick={e => this.handleClear(e)}
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
                    onChange={this.handleInputChange}
                    className="form-text"
                    id="email"
                    onClick={e => this.handleClear(e)}
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
                    onChange={this.handleInputChange}
                    className="form-text"
                    id="subject"
                    onClick={e => this.handleClear(e)}
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
                    onChange={this.handleInputChange}
                    className="form-text form-textarea"
                    id="message"
                    onClick={e => this.handleClear(e)}
                    data-sal="slide-left"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="500"
                  />
                </label>
                <div className="center-submit">
                  <button type="submit" value="Submit" className="form-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        )} */}
      </ContactSection>
    )
  }
}

const ContactSection = styled.section`
  .section-contact {
    background-color: #181e2e;
    padding: 10rem 0 5rem 0;
    color: white;
    @media (max-width: 56.25em) {
      padding: 10rem 0;
    }
  }

  .heading-secondary {
    font-size: 5.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding: 0 0 5rem 0;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 56.25em) {
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
    margin-bottom: 3rem;
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

  .hideform-img {
    width: 35rem;
    height: 35rem;
  }

  .hideform-text {
    text-align: center;
    font-size: 2rem;
    padding: 5rem 3rem;
  }
`