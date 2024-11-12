import { useState } from "react";
import { navLinks } from "../constants";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

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
                    {item.labe}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:hidden ">
              <button onClick={handleToggleMenu} className={`rotate-90  `}>
                {menuToggle ? "k" : "|||"}
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
  );
}
export default Navbar;
