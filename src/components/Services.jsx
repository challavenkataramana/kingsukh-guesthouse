import React from "react";
import { motion } from "framer-motion";
import serviceImage from "../assets/service.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faConciergeBell,
  faUtensils,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faShieldAlt,
      title: "High Class Security",
      description: "24/7 monitored premises with advanced security systems",
    },
    {
      icon: faConciergeBell,
      title: "24 Hours Room Service",
      description: "Round-the-clock hospitality at your doorstep",
    },
    {
      icon: faUtensils,
      title: "Restaurant",
      description: "Gourmet dining with locally-sourced ingredients",
    },
    {
      icon: faMapMarkedAlt,
      title: "Tourist Guide Support",
      description: "Expert guidance for local attractions and experiences",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={serviceImage}
          alt="Hotel Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.h2
              className="text-xl  italic font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Services
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
            className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Strive Only For The Best.
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.3, duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-2xl"
                  fixedWidth
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
