import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Enquiry = () => {
  const path = useLocation();
  console.log(path);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path.pathname]);
  return (
    <div className="bg-gray-100  flex items-center justify-center  ">
      <div className="bg-white shadow-lg rounded-lg p-8  w-full">
        <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
          Enquiry <span className="text-yellow-500">Us</span>
        </h2>
        <form className="space-y-6">
          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-bold text-gray-800"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter your company name"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="companyMobile"
              className="block text-sm font-bold text-gray-800"
            >
              Company Mobile Number
            </label>
            <input
              type="tel"
              id="companyMobile"
              name="companyMobile"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter company mobile number"
              required
            />
          </div>

          {/* Contact Person */}
          <div>
            <label
              htmlFor="contactPerson"
              className="block text-sm font-bold text-gray-800"
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter contact person's name"
              required
            />
          </div>

          {/* Person's Mobile Number */}
          <div>
            <label
              htmlFor="personMobile"
              className="block text-sm font-bold text-gray-800"
            >
              Person's Mobile Number
            </label>
            <input
              type="tel"
              id="personMobile"
              name="personMobile"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter person's mobile number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-bold text-gray-800"
            >
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows="4"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter your requirements"
              required
            ></textarea>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-bold text-gray-800"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="2"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 text-sm"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
