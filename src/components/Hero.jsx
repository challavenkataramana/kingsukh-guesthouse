import React from "react";
import HeroImage from "../assets/ayodhya.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Ayodhya View"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Welcome to{" "}
          <motion.span
            className="
            text-black-300 
            rounded-lg 
            px-2 py-1.5 
            md:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.5),0_2px_4px_-2px_rgba(0,0,0,0.5)]
          "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.2 }}
          >
            KingSukh
          </motion.span>{" "}
          Guest House
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl italic mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Simple - Unique - Friendly
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          <a
            href="#rooms"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            View Rooms
          </a>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
