import { useState } from "react";

// Card component
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
  );
};

// CardContent component
const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Button component
const Buton = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-primary text-secandari hover:bg-primary transition text-sm font-normal font-Nunito-font ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const projects = [
  {
    title: "Agency One Page",
    category: "Web",
    image: "portfolio-1.png",
    demo: "https://paralax-agency.vercel.app/",
    code: "https://github.com/pritomrabidas",
  },
  {
    title: "SkinCare",
    category: "Web",
    image: "portfolio-2.png",
    demo: "https://skincare-e-commerce-nine.vercel.app/",
    code: "https://github.com/pritomrabidas",
  },
  {
    title: "Student Dashboard",
    category: "Web",
    image: "portfolio-3.png",
    demo: "https://dash-board-five-wine.vercel.app/",
    code: "https://github.com/pritomrabidas",
  },
  {
    title: "ToDo",
    category: "App",
    image: "todo.png",
    demo: "https://react-to-do-omega-five.vercel.app/",
    code: "https://github.com/pritomrabidas",
  },
];

const categories = ["All", "Web", "App", "Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-[#f9fafbe2] py-10 md:py-20 px-4">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-primary font-Nunito-font font-bold text-center mb-2"
        >
          My Portfolio
        </h2>
        <span
          data-aos="fade-left"
          data-aos-duration="2000"
          className="2xl:text-lg xl:text-lg md:text-base text-base text-secandari font-Popins font-medium justify-center flex pb-6"
        >
          Most recent works
        </span>

        <div className="flex justify-center gap-4 pb-9 flex-wrap pt-3">
          {categories.map((category) => (
            <Buton
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              } border border-gray-300 shadow-sm cursor-pointer`}
            >
              {category}
            </Buton>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-68 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent>
                <h2 className="text-xl font-Monrope font-semibold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.demo}
                    className="text-gray-600 font-Nunito-font font-normal hover:underline text-sm"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-gray-600 font-Nunito-font font-normal hover:underline text-sm"
                    target="_blank"
                  >
                    View Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
