import { services } from "../constants";

function Services() {
  return (
    <div className="bg-[#F4F4F5]  relative md:pb-20 pb-10 ">
      <div className="absolute right-0">
        <img src="../../arc2.svg " alt="arc" className="h-[70vh]" />
      </div>
      <div className="absolute left-0 bottom-0 ">
        <img src="../../arc1.svg" alt="" className="h-[70vh]" />
      </div>
      <div className=" z-10  relative max-w-7xl m-auto px-4 md:px-10">
        <div className="flex flex-col justify-center items-center pt-20">
          <div>
            <h1 className="text-xl text-[#3535DE] font-[500] tracking-wider uppercase">
              Our Services
            </h1>
          </div>
          <div className="pt-10 flex flex-col items-center justify-center ">
            <h1 className="text-center  text-2xl lg:text-6xl font-semibold">
              Take Your Business to the next Level
            </h1>
            <p className="text-center pt-6 text-[#76767F] tracking-wide md:w-[46rem]">
              We offer tailored solutions to ensure that your business stands
              out.
            </p>
          </div>
        </div>
        <div className="pt-14 flex justify-center ">
          <div className=" flex flex-col md:grid md:grid-cols-2 gap-16  ">
            {services.map((item, index) => (
              <div
                key={index}
                className=" space-y-6 p-10 relative flex flex-col items-center bg-white rounded-md "
              >
                <div className="bg-[#3535DF] absolute w-24 h-24 rounded-full -top-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h1 className="text-2xl font-[500]">{item.title}</h1>
                <p className="text-[#76767F] text-center ">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
