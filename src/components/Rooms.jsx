import { motion } from "framer-motion";
import Room1Image from "../assets/room2.jpg";
import Room2Image from "../assets/large.jpg";

const LivingRooms = () => {
  return (
    <section id="rooms" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <div className="flex items-center mb-4">
            <motion.h1
              className="text-xl font-bold italic"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Our Living Room
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
          <p className="text-3xl md:text-5xl font-bold md:text-left text-black max-w-2xl ">
            The Most Memorable Rest Time Starts Here
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={Room1Image}
              alt="Cozy Haven Room"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Cozy Haven Room
              </h3>
              <p className="text-gray-600 mb-4">
                Escape to comfort in our Cozy Haven Room, a snug retreat
                designed for intimate relaxation.
              </p>

              <p className="text-lg font-semibold text-blue-600 mb-3">
                Starting from Rs. 1000/night
              </p>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                  BOOK NOW
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={Room2Image}
              alt="Spacious Serenity Suite"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Spacious Serenity Suite
              </h3>
              <p className="text-gray-600 mb-4">
                Indulge in luxury and ample space in our Spacious Serenity
                Suite, where tranquility meets roomy elegance.
              </p>

              <p className="text-lg font-semibold text-blue-600 mb-3">
                Starting from Rs. 1500/night
              </p>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors">
                  BOOK NOW
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivingRooms;
