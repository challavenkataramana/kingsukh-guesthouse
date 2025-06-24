import React from "react";
import { motion } from "framer-motion";
const LocationMap = () => {
  return (
    <div className="w-full ">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center mb-3">
          <motion.h2
            className="text-xl  italic font-bold text-black"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Location
          </motion.h2>
          <motion.hr
            className="w-12 h-0.5 rounded-md ml-2 bg-blue-400 border-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Find Us at Kingsukh Guest House
        </motion.h3>
      </motion.div>
      <div className="aspect-video w-full h-100  overflow-hidden shadow-lg">
        <iframe
          title="Kingsukh Guest House Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501735122567!2d86.85721547458556!3d23.58633237878264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1750696885031!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
