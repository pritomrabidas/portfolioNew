import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { TbBrandFiverr } from "react-icons/tb";
const Banner = () => {
  //   const handleDownload = () => {
  //     const link = document.createElement("a");
  //     link.download = "My_CV.pdf";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };
  return (
    <section className="pt-20 bg-[#f9fafbe2]">
      <div className="pb-24 2xl:pb-28 sm:pb-28 lg:pb-28  w-full">
        <div className="container flex flex-col sm:flex-col xl:flex-row lg:flex-row md:flex-row">
          <div className=" w-full xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-full sm:justify-center sm:mx-auto">
            <div className="w-full justify-center flex pt-0 xl:pt-12 lg:pt-9 md:pt-12 sm:pt-0">
              <img
                className=" h-[200px] xl:h-[290px] lg:h-[250px] md:h-[220px] sm:h-[200px] w-[200px] xl:w-[290px] lg:w-[250px] md:w-[220px] sm:w-[200px] rounded-full border-2 border-gray-50 duration-200 relative hover:bg-[#122533] hover:opacity-100 cursor-pointer"
                src="banner.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full xl:w-3/5  lg:w-3/5 md:w-3/5 sm:w-full text-start sm:text-center md:text-start lg:text-start xl:text-start sm:mx-auto">
            <div className="pl-20 pt-12">
              <h3 className=" text-lg md:text-xl sm:text-lg font-semibold text-gray-500 font-Nunito-font">
                Hi, I'm
              </h3>
              <h3 className=" text-xl lg:text-3xl md:text-2xl  font-bold text-gray-800 font-Montez">
                Pritom Rabidas
              </h3>
              <h4 className=" text-xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl font-semibold text-gray-700 font-Nunito-font pt-2 pb-3">
                <TypeAnimation
                  sequence={[
                    "Full-stack Developer",
                    1000,
                    "React & Django Specialist",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h4>
              <p className=" text-lg md:text-xl sm:text-lg font-semibold text-gray-500 font-Nunito-font">
                Building scalable and elegant web applications
              </p>
            </div>
            <div className="flex pt-4 gap-3 pl-20 justify-start sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              {/* <button onClick={handleDownload} className="">
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-center xl:px-10 lg:px-10 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg  md:px-6 sm:px-5 px-4 py-3 lg:py-4 xl:py-4 md:py-3 sm:py-3 overflow-hidden font-mono font-medium tracking-tighter text-gray-800 rounded-lg group border-[1px] border-gray-200"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-100 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Download CV</span>
                </a>
              </button> */}
              <Link
                to="contact"
                className="relative inline-flex items-center justify-center xl:px-10 lg:px-10 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg md:px-6 sm:px-5 px-4 py-3 lg:py-4 xl:py-4 md:py-3 sm:py-3 overflow-hidden  font-medium font-Nunito-font text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative">
                  <Link to="/contact">Let's Talk</Link>
                </span>
              </Link>
            </div>
            <div className=" pt-10 pl-20 justify-start flex sm:justify-center md:justify-start lg:justify-start xl:justify-start">
              <ul className="flex gap-3">
                <li className="w-10 h-10 cursor-pointer rounded-full text-gray-700 border-2 border-gray-300 shadow-4xl flex justify-center items-center leading-10 duration-1000 delay-75 hover:bg-gray-600 hover:text-gray-100 ">
                  <Link to="https://www.fiverr.com/dev_pritomrabi/be-your-full-stack-web-developer-with-react-django-e46f">
                    <TbBrandFiverr />
                  </Link>
                </li>
                <li className="w-10 h-10 cursor-pointer rounded-full text-gray-700 border-2 border-gray-300 shadow-4xl flex justify-center items-center leading-10 duration-1000 delay-75 hover:bg-gray-600 hover:text-gray-100 ">
                  <Link to="https://github.com/pritomrabidas">
                    <FiGithub />
                  </Link>
                </li>
                <li className="w-10 h-10 cursor-pointer rounded-full text-gray-700 border-2 border-gray-300 shadow-4xl flex justify-center items-center leading-10 duration-1000 delay-75 hover:bg-gray-600 hover:text-gray-100 ">
                  <Link to="https://www.linkedin.com/in/pritomrabi/">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
