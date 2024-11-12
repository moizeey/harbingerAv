import { footerAbout } from "../constants";

function Footer() {
  return (
    <div className=" bg-[#F4F4F5] ">
      <div className="pt-10 border-b border-white  w-full flex-wrap gap-y-10 font-heebo flex justify-between  px-20  pb-10 ">
        <div className="sm:w-1/2 w-full lg:w-1/3 space-y-4 m-auto sm:border-none  border-b border-[#3C3C42] pb-6 ">
          <h1 className=" md:text-2xl text-xl font-semibold">Harbinger AR</h1>
          <p className=" w-[80%]">
            Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
            vitae cursus auctor laoreet fermentum.
          </p>
        </div>
        <div className="sm:w-1/2 w-full lg:w-1/3  border-b sm:border-b-0 pb-6 sm:pb-0 sm:border-l sm:pl-10 border-[#3C3C42] space-y-4 m-auto  ">
          <h1 className="pr-7 text-xl font-semibold md:text-2xl ">About</h1>
          <ul className="flex flex-col gap-2">
            {footerAbout.map((item, index) => (
              <li
                key={index}
                className="relative xl:w-[25%]  group cursor-pointer"
              >
                {item.lable}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-black"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:w-1/2 w-full lg:w-1/3  lg:border-l lg:pl-10 border-[#3C3C42] space-y-4 m-auto sm:m-0 ">
          <h1 className=" md:text-2xl text-xl font-semibold">Contact Info</h1>
          <p className="w-[80%] lg:w-1/2 leading-[1.7rem]">
            123 Demo St, Lakeland, FL 45678, United States. +1 123-456-7890
            mail@example.com
          </p>
        </div>
      </div>
      <div className="py-10 px-10">
        <h1 className="text-center">
          © 2024 Digital Marketing Agency | Powered by Digital Marketing Agency
        </h1>
      </div>
    </div>
  );
}
export default Footer;
