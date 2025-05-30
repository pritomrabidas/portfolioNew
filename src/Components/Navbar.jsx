import { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { IoGrid } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { SiAppgallery } from "react-icons/si";

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
      <nav className="block md:hidden absolute bottom-0 left-0 w-full bg-white shadow-lg z-10 px-6 py-2 border-t-[1px] border-gray-300">
        <div className="container mx-auto justify-between items-center flex">
          <Link
            to="/"
            className="text-2xl font-medium text-black font-Popins py-1"
          >
            Pritom
          </Link>
          <IoGrid onClick={handleClick} />
        </div>
      </nav>
      {nav && (
        <div className="block md:hidden absolute bottom-0 left-0 w-full bg-gray-200 shadow-2xl z-10 sm:px-12 px-2 py-9 py-4 rounded-t-3xl border-gray-300">
          <div className="flex justify-between px-16 pb-5">
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <IoMdHome className="text-xl mx-4" />
              <p className="">Home</p>
            </Link>
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <FaUser className="text-xl mx-4" />
              <p className="">About</p>
            </Link>
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <FaFile className="text-xl mx-4" />
              <p className="pl-1">Skills</p>
            </Link>
          </div>
          <div className="flex justify-between px-16">
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <SiAppgallery className="text-xl mx-4" />
              <p className="">Portfolio</p>
            </Link>
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <IoMdHome className="text-xl mx-4" />
              <p className="">Contact</p>
            </Link>
            <Link className="font-Opensans text-lg text-black font-medium items-center justify-center shadow px-4 py-3 rounded-lg cursor-pointer">
              <p
                className="text-end justify-end pt-2 px-3"
                onClick={() => setNav(false)}
              >
                X
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
