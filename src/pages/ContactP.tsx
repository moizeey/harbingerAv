import { BsArrowRight } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactP() {
  return (
    <div>
      <div className="bg-[#121240] relative  font-heebo px-10 py-4 ">
        <div className="z-10  ">
          <img
            src="/landingBg2.svg"
            alt="bg2"
            className="w-1/2 absolute bottom-0 right-0 "
          />
        </div>
        <div className="text-white ">
          <div className="relative  mx-auto  max-w-full w-full">
            <Navbar />
          </div>
          <div className="flex  pt-28 pb-20 sm:mt-10 md:mt-10 flex-col gap-4 md:gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] leading-[3rem] md:leading-[5rem] lg:text-left text-[2.5rem]  text-center max-w-[50rem]  lg:text-[5rem] md:text-[4rem] sm:text-[3rem]  md:max-lg:max-w-[40rem]     md:text-left">
                Contact
              </h1>

              <p className="py-2 z-50  lg:text-left md:text-left  text-center max-w-[50rem] lg:text-3xl text-md sm:text-2xl">
                Sollicitudin eros nulla mus donec a quisque convallis integer
                condimentum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full px-10 pt-20 pb-10 lg:gap-10  gap-y-16 font-heebo">
        <div className="lg:w-1/2 flex flex-col gap-12">
          <h1 className="text-[#3535DE] text-xl uppercase">
            Let's Make it Happen
          </h1>
          <h1 className="lg:text-6xl md:text-4xl  text-2xl">
            Don't Hesitate To Get in Touch.
          </h1>
          <div className="border-t-4 border-[#3535DE]  w-[4rem]"></div>
          <p className="text-[#76767F] md:text-lg font-montserrat">
            Eu feugiat tincidunt vitae, tincidunt purus aliquam pharetra viverra
            massa vitae mi arcu tortor et cursus tempor netus sit vitae
            habitasse aliquam eu vel lacinia auctor sed nisl pellentesque morbi
            molestie condimentum.
          </p>
          <div className="flex capitalize  cursor-pointer ">
            <div className="relative flex items-center gap-4 lg:text-xl group hover:text-[#3535DE]">
              <span>learn more</span>
              <BsArrowRight className="inline" />
              <span className="absolute h-0.5 w-0 group-hover:w-full bg-[#3535DE]  left-0 bottom-0 transition-all duration-300"></span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col space-y-10 lg:pl-32 lg:p-20 ">
          <div className="flex flex-col gap-4  ">
            <span className="flex items-center gap-6">
              <IoLocationSharp size={30} color="#3535DE" />
              <h1 className="text-[#76767F]  md:2xl lg:text-3xl tracking-widest">
                Address
              </h1>
            </span>
            <p className="lg:text-2xl text-[#26262C]">
              123 Demo St, Lakeland, FL 45678, United States.
            </p>
          </div>
          <div className="flex flex-col gap-4  ">
            <span className="flex items-center gap-6">
              <FaPhoneFlip size={30} color="#3535DE" />
              <h1 className="text-[#76767F]  md:2xl lg:text-3xl tracking-widest">
                Phone
              </h1>
            </span>
            <p className="lg:text-2xl text-[#26262C]">+1 123-456-7890</p>
          </div>
          <div className="flex flex-col gap-4  ">
            <span className="flex items-center gap-6">
              <FaEnvelope size={30} color="#3535DE" />
              <h1 className="text-[#76767F]  md:2xl lg:text-3xl tracking-widest">
                Email
              </h1>
            </span>
            <p className="lg:text-2xl text-[#26262C]">mail@example.com</p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default ContactP;
