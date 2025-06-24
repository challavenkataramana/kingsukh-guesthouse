import React from "react";
import { FaCalendarCheck, FaSmileBeam } from "react-icons/fa";

const BookingDataCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8  max-w-4xl mx-4 md:mx-auto my-15 border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="bg-blue-100 p-5 rounded-full">
            <FaCalendarCheck className="text-blue-600 text-4xl" />
          </div>
          <div className="text-left">
            <div className="text-5xl font-bold text-blue-600">100+</div>
            <h3 className="text-xl font-semibold text-gray-800">Bookings</h3>
            <p className="text-gray-500 text-sm">Successful reservations</p>
          </div>
        </div>

        <div className="hidden md:block h-20 w-px bg-gray-200"></div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="bg-green-100 p-5 rounded-full">
            <FaSmileBeam className="text-green-600 text-4xl" />
          </div>
          <div className="text-left">
            <div className="text-5xl font-bold text-green-600">150+</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Happy Clients
            </h3>
            <p className="text-gray-500 text-sm">Satisfied customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDataCard;
