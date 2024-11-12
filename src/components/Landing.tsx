import { useState } from "react";
import { navLinks } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
// import { IoSearchSharp } from "react-icons/io5";

function Landing() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const handleOnClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      {menuToggle && (
        <div className="z-50 absolute top-20 bg-white font-heebo max-w-full lg:hidden w-full ">
          <ul className=" px-10 py-4 md:text-md text-[#76767F] flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <li className="cursor-pointer hover:underline" key={index}>
                <NavLink
                  className={({ isActive }) => `
              ${isActive ? "text-[#121240CF]" : "text:white"}
              `}
                  to={item.href}
                >
                  {item.labe}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="bg-landing bg-cover bg-center  min-h-screen  relative font-heebo px-10 py-4">
        <div className="bg-[#121240CF] opacity-[100] absolute inset-0"></div>
        <div className="z-10  ">
          <img
            src="/landingBg2.svg"
            alt="bg2"
            className="w-1/2 absolute bottom-0 right-0 "
          />
        </div>
        <div className=" text-white   ">
          <div className="relative mx-auto  max-w-[99rem]">
            <nav className="  ">
              <div className="mx-auto relative  text-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center space-x-32">
                    <div>
                      <h1 className="text-3xl   tracking-tight font-semibold">
                        Harbinger AR
                      </h1>
                    </div>
                    <ul className=" space-x-6 lg:flex hidden">
                      {navLinks.map((item, index) => (
                        <li
                          className="cursor-pointer relative group  "
                          key={index}
                        >
                          <NavLink
                            className={({ isActive }) => `
              ${isActive ? "text-[#494964cf]" : "text:white"}
              `}
                            to={item.href}
                          >
                            {item.labe}
                          </NavLink>
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:hidden ">
                    <button
                      onClick={handleToggleMenu}
                      className={`rotate-90  `}
                    >
                      {menuToggle ? <RxCross1 /> : "|||"}
                    </button>
                  </div>

                  <div className="space-x-6 lg:flex items-center hidden">
                    <button className="px-5   capitalize tracking-wide py-3 bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black">
                      get a free quote
                    </button>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex  sm:mt-10 md:mt-10 flex-col gap-4 md:gap-10">
              <h1 className=" text-xl lg:text-left sm:pt-4 md:pt-4 pt-20 text-center ">
                Welcome to Harbinger AR
              </h1>
              <div className="flex flex-col gap-4">
                <h1 className=" font-semibold leading-[3rem] md:leading-[5rem] lg:text-left text-[2.5rem]  text-center max-w-[50rem]  lg:text-[5rem] md:text-[4rem] sm:text-[3rem]  md:max-lg:max-w-[40rem]     md:text-left">
                  Leading Internet Marketing Agency Based on Florida.
                </h1>

                <p className="py-2 lg:text-left md:text-left  text-center max-w-[50rem] lg:text-3xl text-md sm:text-2xl">
                  Sollicitudin eros nulla mus donec a quisque convallis integer
                  condimentum volutpat felis sed aliquet netus dolor dictumst
                  pellentesque.
                </p>
              </div>
            </div>
            <div className="flex mt-10 gap-6   lg:flex-row flex-col   ">
              <button className="px-5 py-3 capitalize tracking-wide  bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black">
                get a free quote
              </button>

              <div className="space-x-3  flex items-center justify-center    capitalize tracking-wide cursor-pointer">
                <span className="relative group">
                  learn more
                  <span className="absolute h-0.5 w-0 group-hover:w-full bg-white left-0 bottom-0 transition-all duration-300"></span>
                </span>

                <span className=" ">
                  <BsArrowRight className="inline" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
