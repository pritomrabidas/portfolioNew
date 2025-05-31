import { GoArrowRight } from "react-icons/go";
import { CiVoicemail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoWhatsapp } from "react-icons/bi";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99t8mvk",
        "template_dawoxxq",
        form.current,
        "Xr2QJ71Wn52Q92xeO"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };
  return (
    <section className="bg-white md:py-20 py-10">
      <div className="container mx-auto w-full 2xl:px-48 xl:px-48 lg:px-48 md:px-48 sm:px-32 px-5">
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-primary font-Nunito-font font-bold text-center mb-2"
        >
          Get in touch
        </h2>
        <span
          data-aos="fade-left"
          data-aos-duration="2000"
          className="2xl:text-lg xl:text-lg md:text-base text-base text-secandari font-Popins font-medium justify-center flex pb-6"
        >
          Contact Me
        </span>

        {/* Talk to me section */}
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col w-full justify-center gap-20 py-7">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="1/2 justify-center mx-auto"
          >
            <h3 className=" text-xl text-primary font-Raleway text-center font-semibold mb-4">
              Talk to me
            </h3>
            <div className=" space-y-6 justify-end mx-auto">
              <div className=" bg-gray-100 py-5 rounded-lg shadow w-fit px-10 text-center">
                <CiVoicemail className="text-2xl text-secandari mb-1 mx-auto" />
                <h3 className="text-sm text-primary font-Raleway font-bold">
                  Email
                </h3>
                <span className="text-sm text-secandari font-normal font-Monrope">
                  pritomrabidas102@gmail.com
                </span>
                <Link
                  to="mailto:pritomrabidas102@gmail.com?subject=Feedback&amp;body=Message"
                  className="text-primary text-sm font-Nunito-font font-normal mx-auto justify-center flex items-center mt-2"
                >
                  Write me <GoArrowRight className="text-sm ml-2" />
                </Link>
              </div>
              <div className=" bg-gray-100 p-5 rounded-lg text-center shadow w-fit px-24">
                <BiLogoWhatsapp className="text-2xl text-secandari mb-1 mx-auto" />
                <h3 className="text-sm text-primary font-Raleway font-bold">
                  WhatsApp
                </h3>
                <span className="text-sm text-secandari font-normal font-Monrope">
                  01929712201
                </span>
                <Link
                  to="https://wa.me/01929712201"
                  className="text-primary text-sm font-Nunito-font font-normal mx-auto justify-center flex items-center mt-2"
                >
                  Write me <GoArrowRight className="text-sm" />
                </Link>
              </div>
              <div className=" bg-gray-100 p-5 rounded-lg text-center shadow w-fit px-24">
                <TiSocialLinkedin className="text-2xl text-secandari mb-1 mx-auto" />
                <h3 className="text-sm text-primary font-Raleway font-bold">
                  LinkedIn
                </h3>
                <span className="text-sm text-secandari font-normal font-Monrope">
                  Hello
                </span>
                <Link
                  to="https://www.linkedin.com/in/pritomrabi/"
                  className="text-primary text-sm font-Nunito-font font-normal mx-auto justify-center flex items-center mt-2"
                >
                  Write me <GoArrowRight className="text-sm ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="w-1/2 ">
            <h3 className="text-xl text-primary font-Raleway text-start font-semibold mb-4">
              Write your project
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                <label className=" block text-base font-medium text-primary font-Nunito-font py-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                  placeholder="Insert your name"
                />
              </div>
              <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                <label className=" block text-base font-medium text-primary font-Nunito-font py-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                  placeholder="Insert your email"
                />
              </div>
              <div className="2xl:w-96 xl:w-96 lg:w-96 sm:w-96 w-80">
                <label className=" block text-base font-medium text-primary font-Nunito-font py-1">
                  Project
                </label>
                <textarea
                  name="project"
                  cols="20"
                  rows="5"
                  className="font-Opensans font-normal text-sm text-primary w-full outline-none border-2 border-gray-300 rounded-lg p-4"
                  placeholder="Write your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-[#212121e0] text-white px-6 py-3 text-base font-Nunito-font font-normal duration-200 hover:bg-[#0f0f0fc5] rounded-lg flex items-center cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;