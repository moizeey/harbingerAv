import { navLinks } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";

function Landing() {
  return (
    <div className="  ">
      <div className=" bg-landing bg-cover bg-center font-heebo ">
        <div className="bg-[#121240CF]  absolute inset-0 opacity-[100]"></div>
        <div className="flex justify-end items-end">
          <img
            src="../../landingBg2.svg"
            alt="img"
            className=" w-1/2 z-40 h-screen "
          />
        </div>
        <div className="absolute sm:px-10 lg:px-0 text-white inset-0 max-w-7xl m-auto">
          <div className="flex justify-between py-6 ">
            <div className="flex  ">
              <div>
                <h1 className="uppercase lg:text-2xl text-lg sm:text-xl font-bold">
                  Harbinger
                </h1>
                <h1 className="pt-2 tracking-wider uppercase text-xl ">
                  Welcome to Harbinger
                </h1>
              </div>
              <div className="lg:flex hidden space-x-8  ">
                {navLinks.map((item, index) => (
                  <ul key={index}>
                    <li className="cursor-pointer tracking-wide">
                      {item.labe}
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="space-x-10 z-50 ">
              <button className="">
                <IoSearchSharp className="inline" size={20} />
              </button>
              <button className="px-5 capitalize tracking-wide py-3 bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black">
                get a free quote
              </button>
            </div>
          </div>
          <div>
            <div className="pt-20 lg:text-8xl sm:text-3xl text-3xl w-[50rem] tracking-tight font-heebo ">
              Leading Internet Marketing Agency Based on Florida.
            </div>

            <p className="pt-14 text-wrap w-[40rem] font-montserrat font-semibold text-lg tracking-wider ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, excepturi. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="flex space-x-16 mt-10  ">
            <button className="px-5 capitalize tracking-wide py-3 bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black">
              get a free quote
            </button>
            <div className="space-x-3 py-3 capitalize tracking-wide cursor-pointer">
              <span>learn more</span>
              <span className="">
                {" "}
                <BsArrowRight className="inline" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
