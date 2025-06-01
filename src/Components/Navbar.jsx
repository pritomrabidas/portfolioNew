import { useState } from "react";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { SiAppgallery } from "react-icons/si";
import { FaMicrophoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <nav className="py-3 hidden md:block bg-white shadow-sm fixed w-full  z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="text-2xl font-medium text-black font-Popins py-1"
            >
              Pritom
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-14 text-lg leading-10 text-black font-Nunito-font font-normal pr-10">
            {["/", "/about", "/skills", "/portfolio", "/contact"].map(
              (path, index) => (
                <li
                  key={index}
                  className="relative hover:text-gray-800 before:absolute before:content-[''] before:w-8 before:h-[1px] before:bg-gray-800 before:bottom-2 before:left-0 before:scale-0 hover:before:scale-100 before:duration-500 before:origin-left"
                >
                  <Link to={path}>
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
      <nav className="block md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg z-20 px-6 py-2 border-t-[1px] border-gray-300">
        <div className="container mx-auto justify-between items-center flex">
          <Link
            to="/"
            className="sm:text-2xl text-xl font-medium text-black font-Popins py-1"
          >
            Pritom
          </Link>
          <IoGrid onClick={handleClick} />
        </div>
      </nav>
      {nav && (
        <div className="block md:hidden fixed bottom-0 left-0 w-full h-full  z-30">
          <div onClick={() => setNav(false)} className="h-[65%]"></div>
          <div className="h-[35%] bg-gray-100 shadow-2xl z-20 sm:px-12 px-2  py-9  rounded-t-3xl border-gray-300">
            <div className="flex justify-between sm:px-16 px-10 pb-5">
              <Link
                to="/"
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <IoMdHome className="text-lg sm:text-xl mx-4" />
                <p className="">Home</p>
              </Link>
              <Link
                to="about"
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <FaUser className="text-lg sm:text-xl mx-4" />
                <p className="">About</p>
              </Link>
              <Link
                to="skills"
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <FaFile className="text-lg sm:text-xl mx-4" />
                <p className="pl-1">Skills</p>
              </Link>
            </div>
            <div className="flex justify-between sm:px-16 px-10">
              <Link
                to="portfolio"
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <SiAppgallery className="text-lg sm:text-xl mx-4" />
                <p className="">Portfolio</p>
              </Link>
              <Link
                to="contact"
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <FaMicrophoneAlt className="text-lg sm:text-xl mx-4" />
                <p className="">Contact</p>
              </Link>
              <Link
                onClick={() => setNav(false)}
                className="font-Opensans text-base sm:text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer"
              >
                <p className="text-end justify-end pt-2 px-3">X</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
