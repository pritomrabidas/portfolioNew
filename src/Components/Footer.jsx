import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbBrandFiverr } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BiChevronUp } from "react-icons/bi";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white">
      <div className="container mx-auto py-8 text-center">
        {/* Brand */}
        <p
          className="text-2xl text-primary font-bold font-[Montez]"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Pritom
        </p>

        {/* Navigation */}
        <ul
          className="flex justify-center gap-6 mt-4 text-primary text-base font-semibold font-[Nunito]"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <ul
          className="flex justify-center gap-3 mt-4"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          {[
            {
              icon: <TbBrandFiverr title="Fiverr" />,
              url: "https://www.fiverr.com/dev_pritomrabi/be-your-full-stack-web-developer-with-react-django-e46f",
            },
            {
              icon: <FiGithub title="GitHub" />,
              url: "https://github.com/pritomrabidas",
            },
            {
              icon: <FaLinkedinIn title="LinkedIn" />,
              url: "https://www.linkedin.com/in/pritomrabi/",
            },
          ].map(({ icon, url }, index) => (
            <li
              key={index}
              className="w-12 h-12 flex items-center justify-center rounded-xl text-blue-900 border-2 border-gray-400 shadow-md hover:bg-gray-400 transition"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-600 font-[Poppins]">
          © 2025 - All rights reserved by Pritom
        </p>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 right-2 sm:right-4 md:right-8 z-10 p-2 rounded-md text-white transition-transform duration-200 shadow-md cursor-pointer ${
            isVisible ? "scale-100 bg-gray-800" : "scale-0"
          } hover:text-[#ec6060d6]`}
          title="Go to top"
          aria-label="Scroll to top"
        >
          <BiChevronUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
