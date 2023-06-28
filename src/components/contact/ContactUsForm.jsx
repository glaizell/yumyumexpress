import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="text-white ">
      <h2>Send us message</h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          />
        </div>
        <div className="mb-8 flex flex-col">
          <label htmlFor="" className="mb-2">
            Message
          </label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="3"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          ></textarea>
        </div>
        <button className="bg-white px-4 py-2 rounded-3xl text-black">
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactUsForm;
