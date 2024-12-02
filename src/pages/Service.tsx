import { FaNetworkWired } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Service() {
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
              <h1 className=" font-semibold leading-[3rem] md:leading-[5rem] lg:text-left text-[2.5rem]  text-center max-w-[50rem]  lg:text-[5rem] md:text-[4rem] sm:text-[3rem]  md:max-lg:max-w-[40rem]     md:text-left">
                Services
              </h1>

              <p className="py-2 z-50  lg:text-left md:text-left  text-center max-w-[50rem] lg:text-3xl text-md sm:text-2xl">
                Sollicitudin eros nulla mus donec a quisque convallis integer
                condimentum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F5]  relative md:pb-20 pb-10 ">
        <div className="absolute right-0">
          <img src="../../arc2.svg " alt="arc" className="h-[70vh]" />
        </div>
        <div className="absolute left-0 bottom-0 ">
          <img src="../../arc1.svg" alt="" className="h-[70vh]" />
        </div>

        <div className="relative flex-col lg:flex-row w-full flex  gap-4 px-4 md:px-10 py-10">
          <div className="flex flex-col gap-10 w-full pt-20">
            <div>
              <h1 className="text-xl text-[#3535DE] font-[500] tracking-wider uppercase">
                Our Services
              </h1>
            </div>
            <div className="pt-10 flex gap-4  flex-col  ">
              <h1 className="  text-2xl lg:text-6xl font-semibold">
                Take Your Business to the next Level
              </h1>
              <p className="pt-6 text-[#76767F] lg:text-lg font-montserrat tracking-wide ">
                Id senectus facilisi enim accumsan ac aliquam suspendisse
                dapibus morbi ut sed pellentesque elementum velit dictum
              </p>
            </div>
          </div>
          <div className=" flex justify-center w-full pt-20 ">
            <div className=" flex flex-col  gap-4 w-full ">
              {[
                {
                  icon: <FaNetworkWired size={50} color="white" />,
                  title: "Digital Strategy",
                },
                {
                  icon: <FaBullhorn size={50} color="white" />,
                  title: "Advertising",
                },
                {
                  icon: <FaGlobe size={50} color="white" />,
                  title: "Online Marketing",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" space-y-6 p-10 relative flex flex-col items-center bg-white rounded-md "
                >
                  <div className="bg-[#3535DF] absolute w-24 h-24 rounded-full -top-10 flex items-center justify-center ">
                    {item.icon}
                  </div>
                  <h1 className="text-2xl font-[500]">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex justify-center lg:pt-40 w-full ">
            <div className=" flex flex-col  gap-4 w-full ">
              {[
                {
                  icon: <FaNetworkWired size={50} color="white" />,
                  title: "Digital Strategy",
                },
                {
                  icon: <FaBullhorn size={50} color="white" />,
                  title: "Advertising",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className=" space-y-6 p-10 relative flex flex-col items-center bg-white rounded-md "
                >
                  <div className="bg-[#3535DF] absolute w-24 h-24 rounded-full -top-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h1 className="text-2xl font-[500]">{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-10   font-heebo pt-20 pb-10 gap-10  flex flex-col ">
        <div className="flex md:flex-row flex-col  w-full gap-6 ">
          <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Digital Strategy</h1>
            <p className="font-montserrat text-center">
              Mauris pellentesque enim imperdiet quis aliquam erat dolor amet
              dolor vulputate adipiscing ac auctor viverra potenti eu venenatis
              tortor, tellus sem eget viverra condimentum sed adipiscing enim.
            </p>
          </div>
          <div className="lg:pl-32 ">
            <img
              className=" rounded-md w-[50rem] h-auto "
              src="./service-img-1.jpg"
              alt="serviceimg1"
            />
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row w-full gap-6 ">
          <div className="lg:pr-32 ">
            <img
              className=" rounded-md w-[50rem] h-auto   "
              src="./service-img-2.jpg"
              alt="serviceimg1"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Online Marketing</h1>
            <p className="font-montserrat text-center">
              Mauris pellentesque enim imperdiet quis aliquam erat dolor amet
              dolor vulputate adipiscing ac auctor viverra potenti eu venenatis
              tortor, tellus sem eget viverra condimentum sed adipiscing enim.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6 ">
          <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Digital Strategy</h1>
            <p className="font-montserrat text-center">
              Mauris pellentesque enim imperdiet quis aliquam erat dolor amet
              dolor vulputate adipiscing ac auctor viverra potenti eu venenatis
              tortor, tellus sem eget viverra condimentum sed adipiscing enim.
            </p>
          </div>
          <div className="lg:pl-32 ">
            <img
              className=" rounded-md w-[50rem] h-auto "
              src="./service-img-3.jpg"
              alt="serviceimg1"
            />
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row w-full gap-6 ">
          <div className="lg:pr-32 ">
            <img
              className=" rounded-md w-[50rem] h-auto   "
              src="./service-img-4.jpg"
              alt="serviceimg1"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Online Marketing</h1>
            <p className="font-montserrat text-center">
              Mauris pellentesque enim imperdiet quis aliquam erat dolor amet
              dolor vulputate adipiscing ac auctor viverra potenti eu venenatis
              tortor, tellus sem eget viverra condimentum sed adipiscing enim.
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
