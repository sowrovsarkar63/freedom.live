import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 ">\ */}
      {/* <section className="mt-16  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  ">
       */}
      <section className="flex flex-col gap-y-5   md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly xl:flex-row xl:justify-evenly 2xl:flex-row 2xl:justify-evenly py-10">
        <div className="contact">
     
          
          <div className="contact-info flex justify-center space-x-5 ">
            <div>
            <h2 className="font-medium text-xl leading-7 text-[#5C5C5C] font-poppin ">
            Contact
          </h2>
            <p className="text-right">You can contact us over </p>
              <p>E-mail: </p>
              <p>Instagram: </p>
              <p>Twitter: </p>
            </div>
            <div>
              <br /><br />
              
              <p>office@freedom.live</p>
              <p>@freedom</p>
              <p>@freedom</p>
            </div>
          </div>
        </div>

        <div className="aboutproject text-center   w-72">
          <h2 className="font-medium text-xl leading-7 text-[#5C5C5C] font-poppin">
            About Project
          </h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="aboutproject w-72 mb-16 text-center md:text-right lg:text-right xl:text-right 2xl:text-right">
          <h2 className="font-medium text-xl leading-7 text-[#5C5C5C] font-poppin">
            About Project
          </h2>
          <p className="text-sm leading-relaxed mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button class=" bg-[#E89898] rounded-full py-1 px-6 font-poppin text-white">delete offer</button>
        </div>
        
      </section>
      <p className="text-center p-5 font-poppin">
      freedom.live @ 2022
      </p>
    </footer>
  );
}
