import { BsAward } from "react-icons/bs";
import { LuBriefcase } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Stat = ({ icon, title, subtitle }) => (
  <div className="bg-white shadow-md rounded-lg px-6 py-4 text-center justify-center flex flex-col items-center">
    <div className="sm:text-2xl text-xl text-primary mb-2">{icon}</div>
    <h3 className="sm:text-lg text-base font-semibold text-gray-800">{title}</h3>
    <p className="sm:text-sm text-xs text-gray-500">{subtitle}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="md:py-20 py-10 from-gray-100 via-white to-gray-100">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 data-aos="fade-left" className="md:text-4xl text-2xl font-Nunito-font  font-bold text-primary">
            About Me
          </h2>
          <p
            data-aos="fade-right"
            className="text-gray-700 sm:text-base text-sm leading-relaxed"
          >
            I’m a passionate Front-End Developer and Python Django Developer
            dedicated to solving business challenges through design and
            development. My expertise spans Responsive Web Design, Frontend &
            Backend Development, API Integration, Database Management, and
            Version Control.
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Stat
              icon={<BsAward />}
              title="Experience"
              subtitle="2 Years Working"
            />
            <Stat
              icon={<LuBriefcase />}
              title="Projects"
              subtitle="30+ Completed"
            />
            <Stat icon={<BiSupport />} title="Support" subtitle="Online 24/7" />
          </div>
        </div>

        {/* Image */}
        <div data-aos="fade-up" className="lg:w-1/2 mx-auto justify-center hidden lg:block">
          <div className="md:h-72 sm:h-64 h-60 sm:w-64 w-60 md:w-72  rounded-full overflow-hidden shadow-xl border-8 border-white">
            <img
              src="banner.jpeg"
              alt="Pritom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
