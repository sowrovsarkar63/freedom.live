import React from "react";

export default function Hero() {
  return (
    <section className="h-41 bg-[#F8FAFB]">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5">
        <div className="heroinfo lg:pl- xl:pl-40 2xl:pl-40 py-20">
          <h2 className="text-4xl font-normal font-poppin leading-relaxed mb-7	 ">
            Seek shelter <br />
            offer shelter
          </h2>
          <p className="text-xl font-medium leading-2 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="herobtn sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  justify-start space-y-1 align-middle items-start  md:space-y-8 lg:space-x-2 xl:space-x-11 2xl:space-x-11 md:mb-44 sm:mb-5">
            <button className="  py-2 px-14   bg-[#2488FF] text-white  rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 leading-relaxed">
              Find Help
            </button>
            <button className=" py-2 px-14  bg-[#2488FF] text-white  rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 leading-relaxed">
              Offer Help
            </button>
          </div>
        </div>

        {/* Hero img */}

        <div className="heroinfo  py-10">
         <img className="object-cover" src="/assets/image 2.png" alt="hero image" />
        </div>
      </div>
      
    </section>
  );
}
