import React from "react";
import aboutImage from "../assets/out.jpg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <motion.div
              className="rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Kingsukh Guest House View"
                className="w-full h-auto md:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 p-2 sm:p-4">
            <div className="flex items-center mb-5">
              <motion.h1
                className="text-xl font-bold italic "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                About
              </motion.h1>
              <motion.hr
                className="w-15 h-0.5 rounded-md ml-2 bg-blue-400 border-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover{" "}
              <span className="text-blue-600">Kingsukh Guest House</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p>
                Embark on a tranquil journey at our Kingsukh Guest House,
                enveloped by the scenic allure of Biharinath Hill, Baranti Hill,
                Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon
                Dam, and the captivating Panchat Dam.
              </p>

              <p>
                Revel in the embrace of comfort, relish delightful meals, and
                unwind in our verdant garden oasis. Your ideal retreat beckons,
                promising a harmonious blend of nature's beauty and heartfelt
                hospitality.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-start">
                <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl" />
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> Beside Barshal
                  Water Tank, Manpur, Barhanti, West Bengal 723156
                </p>
              </div>

              <div className="flex items-start">
                <FaPhoneAlt className="flex-shrink-0 mt-1 mr-3 text-blue-500 text-xl" />
                <p className="text-gray-700">
                  <span className="font-semibold">Contact us:</span> +91
                  9007062180
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Book Your Stay
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
