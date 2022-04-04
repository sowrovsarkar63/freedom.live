import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="py-6 bg-white shadow-sm">
        <nav className="flex justify-around ">
          <div className="flex logo">
            <img src="/assets/image 3.png" alt="freedomlive logo" />
            <h2 className="flex items-end text-2xl mx-1 text-[#9BC9FF] font-bold font-poppin ">
              freedom <span className="text-blue-900">.live</span>
            </h2>
          </div>
          <div className="flag">
            <img src="/assets/image 5.png" alt="flag" />
          </div>

          <div className="relative">
            <button class="py-3 px-10 bg-[#DE5A5A] text-white  rounded-full shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 absolute right-20 mr-5">
              REFUGEE
            </button>
            <button class="py-3 px-10 bg-[#F6F8FA] text-[#B5BAC7]  rounded-full shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75  ">
              OFFER
            </button>
          </div>

         
        </nav>
        <ul className="flex flex-col space-x-5 py-5 md:flex-row md:justify-center lg:flex-row lg:justify-center xl:flex-row xl:justify-center 2xl:flex-row 2xl:justify-center">
            <a href="http://" className="font-poppin text-md">Account setting</a>
            <a href="http://" className="font-poppin text-md">Edit Profile</a>
            <a href="http://" className="font-poppin text-md">About freedom.live</a>
            <a href="http://" className="font-poppin text-md">Log out </a>
            
          </ul>
      </header>
    </>
  );
}
