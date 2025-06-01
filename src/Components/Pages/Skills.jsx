import SkilIteam from "./SkillsItem";


const Skills = () => {
  return (
    <section className="md:py-20 px-4 py-12 bg-[#f9fafbf4]">
      <div className="container mx-auto">
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-primary font-Nunito-font font-bold text-center mb-4"
        >
          Skills
        </h2>
        <span
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" 2xl:text-lg xl:text-lg md:text-base text-base text-secandari font-medium font-Popins text-center block mb-8"
        >
          My technical level
        </span>

        <div className="justify-center mx-auto flex w-full gap-8 py-10">
          <div className="flex 2xl:flex-row lg:flex-row md:flex-col flex-col gap-20">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className=" shadow-md rounded-md bg-[#ffff] py-7 px-12"
            >
              <h3 className=" text-xl text-primary font-Monrope font-medium mb-5 text-center">
                Frontend Developer
              </h3>
              <div className=" grid grid-cols-2 gap-10">
                <div className="">
                  <SkilIteam Names={"HTML"} percentage={"Advance"} />
                  <SkilIteam Names={"CSS"} percentage={"Intermediate"} />
                  <SkilIteam Names={"Javascript"} percentage={"Intermediate"} />
                </div>
                <div className="">
                  <SkilIteam Names={"Bootstrap"} percentage={"Advance"} />
                  <SkilIteam Names={"Tailwind"} percentage={"Advance"} />
                  <SkilIteam Names={"React"} percentage={"Intermediate"} />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="shadow-md rounded-md bg-[#f4f4f4] py-7 px-12"
            >
              <h3 className=" text-xl text-primary font-Monrope font-medium mb-5 text-center">
                Backend Developer
              </h3>
              <div className=" grid grid-cols-2 gap-10">
                <div className="">
                  <SkilIteam Names={"Django"} percentage={"Advance"} />
                  <SkilIteam Names={"AdminPanel"} percentage={"Intermediate"} />

                  <SkilIteam Names={"Database"} percentage={"Intermediate"} />
                </div>
                <div className="">
                  <SkilIteam Names={"Python"} percentage={"Intermediate"} />
                  <SkilIteam Names={"API"} percentage={"Intermediate"} />
                  <SkilIteam Names={"Auth"} percentage={"Intermediate"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;