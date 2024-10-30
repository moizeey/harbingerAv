import { services } from "../constants";

function Services() {
  return (
    <div className="bg-[#F4F4F5]  relative  ">
      <div className="z-10">
        <div className="flex justify-end">
          <img src="../../arc2.svg " alt="arc" className="h-[70vh]" />
        </div>
        <div className="flex justify-start h-[70vh]">
          <img src="../../arc1.svg" alt="" />
        </div>
        <div className=" z-50 inset-0 absolute max-w-7xl m-auto ">
          <div className="flex flex-col justify-center items-center pt-20">
            <div>
              <h1 className="text-xl text-[#3535DE] font-[500] tracking-wider uppercase">
                Our Services
              </h1>
            </div>
            <div className="pt-10 flex flex-col items-center justify-center ">
              <h1 className="text-center text-6xl font-semibold">
                Take Your Business to the next Level
              </h1>
              <p className="text-center pt-6 text-[#76767F] text-lg text-wrap tracking-wide w-[46rem]">
                Id senectus facilisi enim accumsan ac aliquam suspendisse
                dapibus morbi ut sed pellentesque elementum velit dictum
              </p>
            </div>
          </div>
          <div className="pt-14 flex justify-center">
            <div className=" grid grid-cols-2 gap-7  ">
              {services.map((item, index) => (
                <div
                  key={index}
                  className=" space-y-6 p-10 bg-white rounded-md "
                >
                  <div>{item.icon}</div>
                  <h1 className="text-2xl font-[500]">{item.title}</h1>
                  <p className="text-[#76767F]  ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
