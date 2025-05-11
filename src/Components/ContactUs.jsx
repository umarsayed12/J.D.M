import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Set the current time in ISO or custom format
    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    setTimestamp(currentTime);

    // Add a slight delay to ensure timestamp state is updated before sending
    setTimeout(() => {
      emailjs
        .sendForm(emailjsServiceId, emailjsTemplateId, form.current, {
          publicKey: emailjsPublicKey,
        })
        .then(
          () => {
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setSuccess(
              "Message sent successfully! We’ll get back to you soon."
            );
          },
          (error) => {
            console.error("FAILED...", error.text);
            setSuccess("Failed to send message. Please try again later.");
          }
        );
    }, 100); // 100ms delay ensures timestamp is set
  };

  return (
    <section
      id="contactus"
      className="min-h-screen bg-[#003f88] p-8 text-white pt-16"
    >
      <h2 className="text-5xl font-extrabold mb-8 text-center w-full">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#00509d] p-8 rounded-2xl shadow-lg space-y-4 text-black"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full p-4 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full p-4 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-4 rounded-md"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {/* Hidden input for timestamp */}
          <input type="hidden" name="timestamp" value={timestamp} />

          {success && <p className="text-green-500 font-medium">{success}</p>}
          <button
            type="submit"
            className="bg-[#fdc500] w-full p-4 rounded-md text-[#00509d] font-bold hover:bg-[#ffd500] transition-all duration-300"
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
            GSTIN: <span className="text-[#fdc500]">09AVLPB6604M1ZB</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.739142452514!2d77.45879588519661!3d28.50379191625764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9000b266f27%3A0x93425bb9eabbc398!2sMS%20JDM%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1746974571541!5m2!1sen!2sin"
            // style={"border:0;"}
            className="w-[100%] md:h-[55%] border-0 rounded-lg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
