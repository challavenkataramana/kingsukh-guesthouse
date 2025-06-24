import React, { useState } from "react";
import { motion } from "framer-motion";
import ayodhya from "../assets/ayodhya.webp";
import baranti from "../assets/baranti.webp";
import flower from "../assets/flower.jpg";
import large from "../assets/large.jpg";
import out from "../assets/out.jpg";
import palash from "../assets/palash.webp";
import recep from "../assets/recep.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    { src: ayodhya, alt: "Surroundings View", category: "surroundings" },
    { src: baranti, alt: "Baranti Landscape", category: "surroundings" },
    { src: flower, alt: "BackSide view", category: "exterior" },
    { src: large, alt: "Room Interior 1", category: "rooms" },
    { src: out, alt: "Guest House View", category: "exterior" },
    { src: palash, alt: "Balcony View", category: "surroundings" },
    { src: recep, alt: "Reception Area", category: "interior" },
    { src: room1, alt: "Room Interior 2", category: "rooms" },
    { src: room2, alt: "Room Interior 3", category: "rooms" },
  ];

  const categories = ["all", "exterior", "interior", "rooms", "surroundings"];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="py-16 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center">
            <motion.h2
              className="text-xl font-bold text-black mb-2 italic md:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our Gallery
            </motion.h2>
            <motion.hr
              className="w-12 h-0.5 rounded-md ml-2 bg-blue-400 border-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            />
          </div>
          <motion.p
            className="text-3xl md:text-5xl max-w-3xl text-black font-bold md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore the beauty of KingSukh Guest House
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-2xl border transition-colors capitalize ${
                activeCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {activeCategory === "all" && (
          <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
            <img
              src={large}
              alt="Featured View"
              className="w-full h-96 object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
