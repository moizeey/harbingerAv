import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { UseMenu } from "../context/navContext";
import { RxCross1 } from "react-icons/rx";
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
    <div>
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
              <button onClick={handleToggleMenu} className={`rotate-90  `}>
                {menuToggle ? "" : "|||"}
              </button>
              {menuToggle && (
                <div className="w-full fixed min-h-screen flex justify-end left-0 z-10 top-0">
                  <div
                    className="bg-black absolute opacity-50 w-full min-h-screen"
                    onClick={() => setMenuToggle(false)}
                  ></div>
                  <div
                    className={`bg-white flex flex-col z-20 w-1/2 sm:w-full min-w-[300px] max-w-[400px]   transform transition-transform duration-700 ease-in-out   ${
                      menuToggle ? " translate-x-0 " : "translate-x-full"
                    } `}
                  >
                    {menuToggle && (
                      <div className="w-full flex justify-end">
                        <button
                          onClick={handleToggleMenu}
                          className={` rotate-90 py-2 px-3`}
                        >
                          <RxCross1 color="black" size={25} />
                        </button>
                      </div>
                    )}
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
                      <div className="px-6  border-t  py-6   border-zinc-300 ">
                        <video
                          className="rounded-md"
                          src="/video/video2.mp4"
                          loop
                          autoPlay
                          muted
                        ></video>
                      </div>
                      <div className="flex flex-col gap-4  px-6 border-t border-b py-8  border-zinc-300">
                        <h1 className="text-3xl   font-montserrat ">
                          HarbingerAr
                        </h1>
                        <p className="text-[#76767F] ">
                          Volutpat commodo at dictum amet tincidunt facilisis id
                          lorem eu vitae cursus auctor laoreet fermentum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
