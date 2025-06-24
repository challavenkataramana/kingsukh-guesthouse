import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  const navItems = ["Home", "About", "Rooms", "Services", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3"
          : "bg-white bg-opacity-80 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <motion.a
          href="#top"
          className="text-2xl font-semibold text-green-600 hover:text-primary transition-colors"
          aria-label="Go to homepage"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          KingSukh Guest House
        </motion.a>

        <motion.div
          className="hidden md:flex items-center space-x-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5 mr-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:bg-blue-200  transition duration-500 font-semibold px-3 py-2 rounded-full relative group"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FaWhatsapp className="text-lg" />
            <span>Book Now</span>
          </motion.a>
        </motion.div>

        <motion.button
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
              >
                <div className="flex flex-col h-full p-6">
                  <motion.button
                    className="self-end p-2 mb-6"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiX size={24} />
                  </motion.button>

                  <nav className="flex-1 flex flex-col space-y-4">
                    {navItems.map((item, i) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between text-gray-800 hover:text-black py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors group"
                        custom={i}
                        initial="closed"
                        animate="open"
                        variants={menuItemVariants}
                      >
                        <span>{item}</span>
                      </motion.a>
                    ))}
                  </nav>

                  <motion.div
                    className="mt-auto pt-6 border-t border-gray-100"
                    custom={5}
                    initial="closed"
                    animate="open"
                    variants={menuItemVariants}
                  >
                    <motion.a
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full transition-colors w-full"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>Book on WhatsApp</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
