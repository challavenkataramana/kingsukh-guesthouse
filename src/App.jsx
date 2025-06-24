import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import React from "react";
import Contact from "./components/Contact";
import LocationMap from "./components/Location";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingDataCard from "./components/BookingDataCard";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <BookingDataCard />
      <Gallery />
      <Contact />
      <LocationMap />
      <Footer />
    </>
  );
}

export default App;
