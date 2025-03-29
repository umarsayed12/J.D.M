import React from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
    e.target.reset();
  };

  return (
    <section
      id="contactus"
      className="min-h-screen bg-[#003f88] p-8 text-white pt-16"
    >
      <h2 className="text-5xl text-white font-extrabold mb-8 text-center w-full">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form
          onSubmit={sendEmail}
          className="bg-[#00509d] p-8 rounded-2xl shadow-lg space-y-4 text-black"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full p-4 rounded-md"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full p-4 rounded-md"
            required
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-4 rounded-md"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#fdc500] w-full p-4 rounded-md text-[#00509d] font-bold hover:bg-[#ffd500]"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Our Office</h3>
          <p>
            Vill. Begampur Main Road, Near Primary School, Greater Noida, Gautam
            Budh Nagar (U.P.) 201306
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+918744046329" className="text-[#fdc500]">
              +91 8744046329
            </a>
            ,{" "}
            <a href="tel:+918595598187" className="text-[#fdc500]">
              +91 8595598187
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="text-[#fdc500]"
              href="mailto:jdmengineeringworks@gmail.com"
            >
              jdmengineeringworks@gmail.com
            </a>
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0069757552783!2d77.4615588!3d28.503763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzEzLjYiTiA3N8KwMjcnbjIwLjEiRQ!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
