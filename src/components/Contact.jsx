import React, { useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "703bf298-4dc5-45c9-bdf9-be365c15c566");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.info("Message likely sent! We'll contact you soon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row">
            <motion.div
              className="lg:w-5/12 relative lg:-left-20 lg:-top-20 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800  italic">
                    Contact Info
                  </h2>
                  <hr className="w-12 h-0.5 rounded-md ml-2 bg-blue-400 border-0" />
                </div>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        Beside Barshal Water Tank,
                        <br />
                        Manpur, Barhanti,
                        <br />
                        West Bengal 723156
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <a
                        href="mailto:kkghosh0099@gmail.com"
                        className="text-gray-700 hover:text-blue-600 transition"
                      >
                        kkghosh0099@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <a
                        href="tel:+919007062180"
                        className="text-gray-700 hover:text-blue-600 transition"
                      >
                        +91 9007062180
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-7/12">
              <h2 className="text-3xl font-bold text-black mb-6">
                Send Us a Message
              </h2>

              <form ref={form} onSubmit={onSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="access_key"
                  value="703bf298-4dc5-45c9-bdf9-be365c15c566"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="w-full py-3 px-1 bg-white bg-opacity-90 rounded-t-md border-b-2 focus:outline-none"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full py-3 px-1 bg-white bg-opacity-90 rounded-t-md focus:ring-white border-b-2 focus:outline-none"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  className="w-full py-3 px-1 bg-white bg-opacity-90 rounded-t-md focus:ring-white border-b-2 focus:outline-none"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  className="w-full py-3 px-1 bg-white bg-opacity-90 rounded-t-md focus:ring-white border-b-2 focus:outline-none"
                  placeholder="Mobile Number"
                />

                <textarea
                  name="message"
                  rows="4"
                  className="w-full py-3 bg-white bg-opacity-90 focus:ring-white border-b-2 focus:outline-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-100 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-200 transition disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
