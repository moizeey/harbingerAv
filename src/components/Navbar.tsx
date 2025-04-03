import { NavLink } from "react-router-dom";
import { footerAbout, navLinks } from "../constants";
import { UseMenu } from "../context/navContext";
import { RxCross1 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { useEffect } from "react";

function Navbar() {
  const { menuToggle, setMenuToggle } = UseMenu();

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuToggle]);
  return (
    <div className="">
      <nav className="  ">
        <div className="mx-auto relative  text-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-32">
              <div>
                <img src="/logo.png" alt="" width={85} />
              </div>
              <ul className=" space-x-6 lg:flex hidden">
                {navLinks.map((item, index) => (
                  <li className="cursor-pointer relative group  " key={index}>
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
                className={` fixed text-black z-50 top-4 right-4 p-2  `}
              >
                {menuToggle ? (
                  <RxCross1 size={24} />
                ) : (
                  <IoIosMenu color="white" size={24} />
                )}
              </button>

              <div className="">
                <div
                  onClick={handleToggleMenu}
                  className={`bg-black w-full h-full  fixed top-0 left-0 min-h-screen z-10 ease-in-out transition-opacity duration-300 
                       ${menuToggle ? "opacity-50" : "opacity-0"} `}
                >
                  {" "}
                </div>
                <div
                  className={`bg-white md:w-[60%] w-[80%] fixed right-0 top-0 min-h-screen z-10 p-5 ease-in-out transition-transform duration-300 
                       
                       ${menuToggle ? "translate-x-0" : "translate-x-full"} `}
                >
                  <ul className=" px-6 py-4 md:text-lg text-[#76767F] flex flex-col gap-2">
                    {navLinks.map((item, index) => (
                      <li
                        className="cursor-pointer hover:underline"
                        key={index}
                      >
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
                  <div className="text-black flex flex-col ">
                    <div className="px-6  border-t  py-6   border-zinc-300 "></div>
                    <div className="flex flex-col gap-4  px-6 border-t border-b py-8  border-zinc-300">
                      <h1 className="text-3xl font-montserrat ">HarbingerAr</h1>
                      <p className="text-[#76767F] ">
                        Volutpat commodo at dictum amet tincidunt facilisis id
                        lorem eu vitae cursus auctor laoreet fermentum. Your
                        trusted partner for digital growth.
                      </p>
                    </div>
                  </div>
                  <div className="text-black  px-6 my-6 border-b pb-5  border-zinc-300">
                    <div className="flex flex-col gap-4  ">
                      <h1 className=" text-3xl font-montserrat  ">About</h1>
                      <ul className="flex flex-col gap-2">
                        {footerAbout.map((item, index) => (
                          <li key={index} className=" text-[#76767F]   ">
                            {item.lable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-black  px-6 my-6 border-b pb-5  border-zinc-300">
                    <div className="flex flex-col gap-4 ">
                      <h1 className="  text-3xl font-montserrat ">
                        Contact Info
                      </h1>
                      <p className="text-[#76767F]  leading-[1.7rem]">
                        123 Demo St, Lakeland, FL 45678, United States. +1
                        123-456-7890 mail@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
  );
}
export default Navbar;
