import { useState } from "react";
import { navLinks } from "../constants";
import { RxCross1 } from "react-icons/rx";
import { solutions } from "../constants";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function AboutP() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
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
          </div>
          <div className="flex  pt-28 pb-20 sm:mt-10 md:mt-10 flex-col gap-4 md:gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-[500] leading-[3rem] md:leading-[5rem] lg:text-left text-[2.5rem]  text-center max-w-[50rem]  lg:text-[5rem] md:text-[4rem] sm:text-[3rem]  md:max-lg:max-w-[40rem]     md:text-left">
                About
              </h1>

              <p className="py-2 z-50  lg:text-left md:text-left  text-center max-w-[50rem] lg:text-3xl text-md sm:text-2xl">
                Sollicitudin eros nulla mus donec a quisque convallis integer
                condimentum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-20 px-10 pt-28 pb-20 w-full gap-4">
        <div className="md:w-1/2   ">
          <h1 className="pt-4  font-semibold text-2xl md:text-4xl lg:text-6xl">
            Specialist in Digital Marketing Solutions
          </h1>
        </div>
        <div className="md:w-[37rem] font-montserrat text-[#76767F] lg:text-lg space-y-6">
          <p>
            Rhoncus vulputate amet ultrices nullam libero vitae egestas egestas
            mauris egestas etiam fringilla nibh ultricies volutpat turpis
            dapibus arcu tellus et ut vestibulum lectus maecenas egestas
            facilisi nam enim curabitur euismod faucibuso.
          </p>
          <p>
            Dignissim tellus tempor sit faucibus mi diam posuere etiam at
            fermentum a vestibulum in eget cursus a id adipiscing scelerisque
            blandit neque, scelerisque velit commodo sit quam vel massa sit
            aliquam arcu nulla velit magna enim dolor enim eu, velit aliquet id
            in risus malesuada faucibus pharetra.
          </p>
        </div>
      </div>
      <div className="bg-banner h-[30rem]  bg-cover bg-center "> </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 pb-20 w-full px-14 pt-24 font-heebo">
        <div className="lg:w-1/2 flex flex-col gap-4 ">
          <h1 className="text-[#3535DE] text-xl uppercase">What we Do</h1>
          <h1 className="lg:text-6xl md:text-4xl text-2xl">
            Full-service Digital Marketing Solutions
          </h1>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div className="border-t-4 border-[#3535DE]  w-[4rem]"></div>
          <p className="text-[#76767F] md:text-lg font-montserrat pb-10">
            Consequat enim mollis mauris vulputate phasellus neque, eros turpis
            et eu adipiscing id tempor, nascetur elit vitae molestie pulvinar
            viverra ut eu lectus mi velit cras integer tristique aliquam proin
            porta tellus elit neque mi velit sed pharetra morbi proin.
          </p>
          <div className="flex flex-col md:flex-row gap-6 pt-10 border-t-2 border-white ">
            {solutions.map((item, index) => (
              <div key={index} className="space-y-2 pb-4    ">
                <div>{item.icon}</div>
                <h1 className="text-2xl font-semibold tracking-wide">
                  {item.title}
                </h1>
                <p className="text-[#76767F]  font-montserrat ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default AboutP;
