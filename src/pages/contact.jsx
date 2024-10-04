import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/router";
import { SEO } from "../components/SEO";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Show toast and redirect to home page after 4 seconds
  useEffect(() => {
    if (state.succeeded) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        router.push("/"); // Redirect to home page
      }, 4000);
    }
  }, [state.succeeded, router]);

  return (
    <ContactSection>
      <SEO title="Jared Rothenberg | Contact" />

      <div className="u-center-text">
        <h2 className="heading" id="contact-me">
          Contact Me
        </h2>
      </div>

      {showToast && (
        <>
          <Overlay />
          <Toast>Thank you for your message! I will get back to you soon.</Toast>
        </>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name<span className="asterisk">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className="form-text input--name" // Class for animation
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">
            Email<span className="asterisk">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="form-text input--email" // Class for animation
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="subject">
            Subject<span className="asterisk">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            required
            onChange={handleChange}
            className="form-text input--subject" // Class for animation
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />

          <label htmlFor="message">
            Message<span className="asterisk">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            className="form-text form-textarea input--message" // Class for animation
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <div className="center-submit">
            <button
              type="submit"
              className="form-submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </ContactSection>
  );
}

// Styled Component for Toast Notification
const Toast = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    to right bottom,
    rgb(102, 201, 255),
    rgb(120, 139, 249)
  );
  color: white;
  padding: 2.5rem 5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  z-index: 1001;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1.5rem 3rem;
  }
`;

// Styled Component for Grey Overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Slight transparent grey */
  z-index: 1000; /* Below the toast but above the content */
`;

// Keyframes for slide-in animation
const slideIn = keyframes`
  0% {
    transform: translateX(5rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ContactSection = styled.section`
  padding: 10rem 0 5rem 0;

  @media (max-width: 56.25em) {
    padding: 10rem 2rem 2rem 2rem;
  }

  .heading {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding: 0 0 5rem 0;
    color: black;
    background: -webkit-linear-gradient(left, rgb(102, 201, 255), rgb(120, 139, 249));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 56.25em) {
      padding: 0;
      font-size: 4rem;
    }
  }

  .u-center-text {
    text-align: center;
  }

  .form-container {
    border-radius: 5px;
    padding: 2rem 0 2rem 0;
    margin: 0 auto;
    color: black;
    font-size: 2rem;
    max-width: 55rem;
  }

  .asterisk {
    color: red;
  }

  .form-text {
    width: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 2.5rem;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(201, 206, 211, 0.568);
    font-size: 16px;
    padding: 10px 15px;

    @media (min-width: 56.25em) {
      font-size: 1.5rem;
      padding: 12px 20px;
    }
  }

  .form-textarea {
    height: 15rem;
  }

  // Slide-in animations for form inputs
  .input--name {
    animation: ${slideIn} 0.5s ease-out;
    animation-fill-mode: backwards;
    animation-delay: 0s;
  }

  .input--email {
    animation: ${slideIn} 0.5s ease-out;
    animation-fill-mode: backwards;
    animation-delay: 0.1s;
  }

  .input--subject {
    animation: ${slideIn} 0.5s ease-out;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;
  }

  .input--message {
    animation: ${slideIn} 0.5s ease-out;
    animation-fill-mode: backwards;
    animation-delay: 0.3s;
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
    padding: 1rem 1rem;
    margin: 1rem 0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 2rem;
    min-width: 8rem;
    transition: all 0.4s;
    line-height: 1.15;

    @media (hover: hover) {
      &:hover {
        background-image: linear-gradient(
          to right bottom,
          rgb(86, 171, 216),
          rgb(101, 116, 204)
        );
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.4);
        border-radius: 6px;
      }
    }

    &:active {
      box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.2);
      transform: translateY(0);
    }
  }
`;