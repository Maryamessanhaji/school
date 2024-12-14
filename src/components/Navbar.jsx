import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Courses from "../pages/Courses";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   if (document.documentElement.classList.contains("dark")) {
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     document.documentElement.classList.add("dark");
  //   }
  // };
  return (
    <>
      <nav className=" bg-white shadow-2xl  w-full ">
        <div
          className="max-w-screen-xl flex flex-row-reverse 
        flex-wrap items-center justify-between mx-auto  "
        >
          {/* Logo */}
          <Link to="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              <img
                src="https://i.pinimg.com/236x/e4/5c/46/e45c462ff7949f4b1dee1d765d3a31a7.jpg"
                alt=""
                className="w-20 "
              />
            </span>
          </Link>
          {/* <li> */}
                <button
                  // onClick={toggleDarkMode}
                  className="relative w-16 h-8 bg-gray-300  rounded-full shadow-inner flex items-center justify-start dark:justify-end transition-all duration-300"
                >
                  {/* Sun Icon */}
                  <div className="absolute left-1 top-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg dark:opacity-0 transition-opacity duration-300">
                    🌞
                  </div>
                  {/* Moon Icon */}
                  <div className="absolute right-1 top-1 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-yellow-300 shadow-lg opacity-0 dark:opacity-100 transition-opacity duration-300">
                    🌙
                  </div>
                </button>
              {/* </li> */}

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
            aria-controls="navbar"
            aria-expanded={isOpen}
          >
            <span className="sr-only">افتح القائمة</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar"
          >
            <ul className=" flex flex-col items-center p-3 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:space-x-reverse md:mt-0 md:border-0  ">
              <li>
                <button
                  className=" m-1 bg-gradient-to-r from-[#cfc85a] hover:from-amber-500 to-amber-400  hover:to-[#cfc85a] px-4 py-1 text-2xl text-gray-700
                hover:text-white rounded-xl translate-all"
                >
                  <Link to="/login" className="">
                    تسجيل الدخول
                  </Link>
                </button>
              </li>
              <li>
                <button
                  className="  m-1 bg-gradient-to-r from-[#cfc85a] to-amber-400 hover:from-amber-500  hover:to-[#cfc85a] px-7 py-1 text-2xl text-gray-700
                hover:text-white rounded-xl translate-all"
                >
                  <Link to="/register">إنشاء حساب</Link>
                </button>
              </li>
              <li>
                <div className="flex bg-gray-50 border border-[#a89f89] focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden">
                  <input
                    type="text"
                    placeholder=" ... ابحث هنا "
                    className="w-full text-sm bg-transparent outline-none pr-2 text-right"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="cursor-pointer "
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>

      <div>
        <Courses />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
