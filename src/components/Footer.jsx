import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaConciergeBell,
  FaCalendarAlt,
  FaShuttleVan,
  FaSpa,
} from "react-icons/fa";

const Footer = () => {
  const handleBookNow = () => {
    window.open(
      "https://wa.me/1234567890?text=I%20would%20like%20to%20book%20a%20stay%20at%20Kingsukh%20Guest%20House",
      "_blank"
    );
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 md:mt-3">Kingsukh Guest House</h3>
            <p className="text-gray-300 mb-6">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <button
              onClick={handleBookNow}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              BOOK NOW
            </button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 mt-5 md:mt-3">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Browse Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Special Offers & Packages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Room Types & Amenities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Customer Reviews & Ratings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Travel Tips & Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 mt-5 md:mt-3">OUR SERVICES</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaConciergeBell className="text-blue-400 mt-1 mr-2" />
                <span className="text-gray-300">Concierge Assistance</span>
              </li>
              <li className="flex items-start">
                <FaCalendarAlt className="text-blue-400 mt-1 mr-2" />
                <span className="text-gray-300">Flexible Booking Options</span>
              </li>
              <li className="flex items-start">
                <FaShuttleVan className="text-blue-400 mt-1 mr-2" />
                <span className="text-gray-300">Airport Transfers</span>
              </li>
              <li className="flex items-start">
                <FaSpa className="text-blue-400 mt-1 mr-2" />
                <span className="text-gray-300">Wellness & Recreation</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 mt-5 md:mt-3">CONTACT US</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>
                Beside Barshal Water Tank,
                <br />
                Manpur, Barhanti,
                <br />
                West Bengal 723156
              </p>
              <p>
                <a
                  href="mailto:kkghosh0099@gmail.com"
                  className="hover:text-white transition"
                >
                  kkghosh0099@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition"
                >
                  +91 9007062180
                </a>
              </p>
            </address>

            <div className="mt-4">
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl mr-2" />
                <span>@kingsukhguesthouse</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>Copyright © 2024 Kingsukh Guest House. All rights reserved. Just for Learning Purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
