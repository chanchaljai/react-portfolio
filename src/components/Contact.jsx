import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72hx2ip",   // Service ID
        "template_zzzuyki",  // Template ID
        form.current,
        "KCS_AsTcWLWL91lya"     // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          <a href="https://github.com/chanchaljai" className="flex items-center gap-3">
            <FaGithub /> https://github.com/chanchaljai
          </a>

          <a href="https://www.linkedin.com/in/chanchal-jaiswal-884305b4/" className="flex items-center gap-3">
            <FaLinkedin /> https://www.linkedin.com/in/chanchal-jaiswal-884305b4/
          </a>

          <a href="chanchal123jaiswal@gmail.com" className="flex items-center gap-3">
            <FaEnvelope /> chanchal123jaiswal@gmail.com
          </a>

          <a href="tel:+919798229927" className="flex items-center gap-3">
            <FaPhone /> 9798229927
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3"
          ></textarea>

          <button
            type="submit"
            className="px-5 py-3 bg-black text-white rounded-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;