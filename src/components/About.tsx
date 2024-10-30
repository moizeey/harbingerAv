import { solutions } from "../constants";

function About() {
  return (
    <div className="bg-[#F4F4F5]  ">
      <div className="pt-28 pb-16 max-w-7xl m-auto font-heebo   ">
        <div className="flex space-x-52 ">
          <div className="w-[25rem]">
            <h6 className="text-xl text-[#3535DE]  uppercase tracking-wider ">
              what we do
            </h6>
          </div>
          <div>
            <div className="text-wrap pb-20 border-b border-[#FCFCFD]">
              <h1 className="lg:text-6xl text-2xl text-wrap leading-[5rem] text-[#26262C]  w-[50rem]">
                Full-service Internet Marketing Solutions
              </h1>
              <p className="text-[#76767F] lg:text-xl text-xl  pt-10">
                Consequat enim mollis mauris vulputate phasellus neque, eros
                turpis et eu adipiscing id tempor, nascetur elit vitae molestie
                pulvinar viverra ut eu lectus mi velit cras integer tristique
                aliquam proin porta tellus elit neque mi velit sed pharetra
                morbi proin.
              </p>
            </div>
            <div className="flex pt-10 space-x-2    ">
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
