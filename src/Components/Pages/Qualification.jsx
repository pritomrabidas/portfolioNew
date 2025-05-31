import { useState } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { HiMiniBriefcase } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <section className="from-gray-100 via-white to-gray-100 py-10">
      <div className="container mx-auto justify-center flex">
        <div className="">
          <div className="">
            <h2
              data-aos="fade-left"
              data-aos-duration="2000"
              className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-primary font-Nunito-font font-bold mb-2 text-center"
            >
              Qualification
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="2xl:text-lg xl:text-lg md:text-base text-base text-secandari font-medium font-Popins text-center"
            >
              My personal journey
            </p>
          </div>

          <div className=" my-12">
            {/* Tabs */}
            <div className=" flex gap-10 mb-6 pb-8">
              <button
                className={` flex items-center gap-2 text-2xl font-medium font-Nunito-font cursor-pointer ${
                  activeTab === "education"
                    ? " text-primary"
                    : " text-secandari"
                }`}
                onClick={() => setActiveTab("education")}
              >
                <PiGraduationCap />
                Education
              </button>
              <button
                className={` flex items-center gap-2 text-2xl font-medium font-Nunito-font cursor-pointer ${
                  activeTab === "education"
                    ? " text-secandari"
                    : " text-primary"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                <HiMiniBriefcase />
                Experience
              </button>
            </div>

            {/* Sections */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="justify-center mx-auto flex"
            >
              {activeTab === "education" && (
                <div className="">
                  <div className=" flex items-center mb-6">
                    <div>
                      <h3 className=" text-lg text-primary font-Raleway font-semibold">
                        HSC
                      </h3>
                      <p className=" text-secandari text-sm font-NunitoFont font-normal py-1">
                        Iqbal Siddique College
                      </p>
                      <div className=" text-secandari font-normal text-xs font-Monrope flex items-center gap-2">
                        <SlCalender /> 2022
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-center">
                      <span className=" w-3 h-3 bg-secandari rounded-full"></span>
                      <span className=" w-[2px] bg-secandari h-12"></span>
                    </div>
                  </div>
                  <div className=" flex items-center my-10 ">
                    <div className="mr-5 flex flex-col items-center">
                      <span className=" w-3 h-3 bg-secandari rounded-full"></span>
                      <span className="w-[2px] bg-secandari h-14"></span>
                    </div>
                    <div>
                      <h3 className="  text-lg text-primary font-Raleway font-semibold">
                        Full Stack Developer
                      </h3>
                      <p className=" text-secandari text-sm font-NunitoFont font-normal py-1">
                        Creative IT - Institute
                      </p>
                      <div className=" text-secandari font-normal text-xs font-Monrope flex items-center gap-2">
                        <SlCalender /> 2023 - 2025
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="">
                  <div className=" flex items-center mb-6">
                    <div>
                      <h3 className="text-lg text-primary font-Raleway font-semibold">
                        Front End Developer
                      </h3>
                      <p className=" text-secandari text-sm font-NunitoFont font-normal py-1">
                        Creative IT - Institute
                      </p>
                      <div className=" text-secandari font-normal text-xs font-Monrope flex items-center gap-2">
                        <SlCalender /> 2023 - 2024
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-center">
                      <span className=" w-3 h-3 bg-secandari rounded-full"></span>
                      <span className=" w-[2px] bg-secandari h-12"></span>
                    </div>
                  </div>

                  <div className=" flex items-center my-10 justify-center">
                    <div className="mr-5 flex flex-col items-center">
                      <span className=" w-3 h-3 bg-secandari rounded-full"></span>
                      <span className="w-[2px] bg-secandari h-14"></span>
                    </div>
                    <div>
                      <h3 className="  text-lg text-primary font-Raleway font-semibold">
                        Back End Developer
                      </h3>
                      <p className=" text-secandari text-sm font-NunitoFont font-normal py-1">
                        Creative IT - Institute
                      </p>
                      <div className=" text-secandari font-normal text-xs font-Monrope flex items-center gap-2">
                        <SlCalender /> 2024 - 2025
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
