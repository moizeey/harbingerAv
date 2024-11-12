import { solutions } from "../constants";

function About() {
  return (
    <div className="bg-[#F4F4F5] max-w-full   ">
      <div
        className="pt-28 pb-16 lg:px-16
       lg:w-full font-heebo   "
      >
        <div className="flex  gap-4  lg:space-x-2   flex-col lg:flex-row px-10 lg:px-0 xl:gap-40">
          <div className="">
            <h6 className="xl:ml-20 text-xl text-[#3535DE] font-[500] min-w-[10rem]  uppercase tracking-wider ">
              what we do
            </h6>
          </div>
          <div className=" pb-0 md:pb-20 border-b border-[#FCFCFD] flex flex-col lg:max-w-[700px] xl:max-w-[1000px] w-full gap-2 ">
            <h1 className="lg:text-6xl text-2xl text-wrap md:leading-[5rem] text-[#26262C]  md:w-[40rem]">
              Full-service Internet Marketing Solutions
            </h1>
            <p className="text-[#76767F]  w-full  ">
              Consequat enim mollis mauris vulputate phasellus neque, eros
              turpis et eu adipiscing id tempor, nascetur elit vitae molestie
              pulvinar viverra ut eu lectus mi velit cras integer tristique
              aliquam proin porta tellus elit neque mi velit sed pharetra morbi
              proin.
            </p>
            <div className="flex pt-10 flex-col md:flex-row gap-y-6 md:gap-2 ">
              {solutions.map((item, index) => (
                <div key={index} className="space-y-2 pb-4    ">
                  <div>{item.icon}</div>
                  <h1 className="text-2xl font-semibold tracking-wide">
                    {item.title}
                  </h1>
                  <p className="text-[#76767F] ">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-banner h-[30rem]  bg-cover bg-center "> </div>
    </div>
  );
}
export default About;
