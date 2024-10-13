"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from 'next/navigation'

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
    <section className="px-8 pt-40 pb-20 md:pb-80 text-black overflow-x-hidden">
      <div className="text-center pb-12">
        <h2
          className="text-5xl uppercase font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customBlueDark mb-12 sm:mb-4"
          id="contact-me"
        >
          Contact Me
        </h2>
      </div>

      {showToast && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"></div>
          {/* Toast Notification */}
          <div className="fixed inset-0 flex items-center justify-center z-[1001]">
            <div className="bg-gradient-to-br from-customBlue to-customBlueDark text-white p-8 sm:p-10 rounded-lg shadow-lg text-2xl sm:text-3xl text-center">
              Thank you for your message! I will get back to you soon.
            </div>
          </div>
        </>
      )}

      <div className="max-w-2xl mx-auto text-black text-lg sm:text-2xl mt-8 overflow-x-hidden">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className="form-text animate-slideIn"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email Field */}
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="form-text animate-slideIn [animation-delay:0.1s]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Subject Field */}
          <label htmlFor="subject">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            required
            onChange={handleChange}
            className="form-text animate-slideIn [animation-delay:0.2s]"
          />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />

          {/* Message Field */}
          <label htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            required
            onChange={handleChange}
            className="form-text h-40 animate-slideIn [animation-delay:0.3s]"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-[33%] min-w-[8rem] bg-gradient-to-r to-customBlueMid from-customBlue hover:to-customBlueDark text-white py-3 px-4 m-5 rounded-md text-2xl transition-all duration-300 cursor-pointer hover:shadow-custom-hover hover:-translate-y-0.5 active:transform active:translate-y-0"
              disabled={state.submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}