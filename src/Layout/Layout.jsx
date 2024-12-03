import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="select-none">
      {/* header  */}
      <div className="p-1 flex items-center justify-center font-bold text-sm text-yellow-600">
        An ISO 9001-2008 Company
      </div>
      <div className="p-4 bg-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="font-bold md:text-3xl text-yellow-500"
          onClick={() => {
            navigate("/");
          }}
        >
          Laxmi <span className="text-white">Instruments</span>
        </div>
        <div
          className={` ${
            showMenu ? "translate-x-0" : "-translate-x-[200%]"
          } transition-all duration-500 absolute bg-slate-800  w-[80%] h-[100vh] z-[999] left-0 top-0 flex flex-col justify-center       items-center  text-3xl gap-10 md:translate-x-0  md:text-sm    md:static md:h-0 md:flex-row md:w-auto   md:flex md:justify-center md:items-center md:gap-6 font-bold  text-white `}
        >
          <AiOutlineCloseSquare
            className=" absolute top-4 right-5 md:hidden text-3xl"
            onClick={() => {
              setShowMenu(false);
            }}
          />
          <p
            className="cursor-pointer hover:text-gray-400"
            onClick={() => {
              navigate("/");
              setShowMenu(false);
            }}
          >
            Home
          </p>

          <p
            className="cursor-pointer hover:text-gray-400"
            onClick={() => {
              navigate("/products");
              setShowMenu(false);
            }}
          >
            Products
          </p>
          <p
            className="cursor-pointer hover:text-gray-400"
            onClick={() => {
              navigate("/about");
              setShowMenu(false);
            }}
          >
            About Us
          </p>
          <p
            className="cursor-pointer hover:text-gray-400"
            onClick={() => {
              navigate("/enquiry");
              setShowMenu(false);
            }}
          >
            Enquiry Us
          </p>
          <p
            className="cursor-pointer hover:text-gray-400"
            onClick={() => {
              navigate("/contact");
              setShowMenu(false);
            }}
          >
            Contact Us
          </p>
        </div>
        <CiMenuFries
          className="text-white text-2xl md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
      <Outlet />
      {/* footer  */}
      <div>
        <footer className="bg-slate-900 text-white py-10">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  <span className="text-yellow-500">Laxmi</span> Instruments
                </h3>
                <p className="mt-4 text-sm">
                  A leading provider of high-quality mechanical instruments.
                </p>
                <p className="mt-4 text-sm">
                  © 2024 Laxmi Instruments. All rights reserved.
                </p>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-100">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-100">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-100">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-100">
                      Enquiry Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-100">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Product Categories */}
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Our Products
                </h4>
                <ul className="mt-4 space-y-2 text-sm max-h-40 overflow-y-auto">
                  <li>Aluminum Casing</li>
                  <li>Ball Valve</li>
                  <li>Bio Hazard Safety Cabinets</li>
                  <li>Fume Hood</li>
                  <li>High Pressure Gas Lining</li>
                  <li>Laboratory Furniture</li>
                  <li>Zeroair Generator</li>
                  <li>
                    <a href="#" className="text-blue-400 hover:underline">
                      View All Products
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8  text-sm">
              <p>
                <span className="font-semibold">Factory:</span> LAXMI
                INSTRUMENTS
                <br />
                31-Yadav Comp., Beside Prakash Dairy, Raghvendra Mandir Road,
                Opp. Ajit Glass, Oshiwara, Jogeshwari (W), Mumbai-400102
                (Maharashtra)
              </p>
              <p className="mt-2">
                <span className="font-semibold">Contact:</span> V. Kailash
                <br />
                Mobile: 9323193755 | 9920533755
              </p>
              <p className="mt-2">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:kailash@laxmiinstruments.com"
                  className="text-blue-400 hover:underline"
                >
                  kailash@laxmiinstruments.com
                </a>
              </p>
              <p className="mt-2">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://www.laxmiinstruments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  www.laxmiinstruments.com
                </a>
              </p>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm">
                Site Designed & Maintained by
                <a href="#" className="text-blue-400 hover:underline ml-1">
                  Versantus
                </a>
                .
              </p>

              {/* Privacy and Terms */}
              <ul className="flex space-x-4 mt-4 md:mt-0">
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
