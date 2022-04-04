import React, { useRef } from "react";
export default function Donator() {
  const clickPoint = useRef();
  const handleFocus = () => {
    clickPoint.current.style.display = "none";
  };

  const handleBlur = () => {
    clickPoint.current.style.display = "block";
  };
  return (
    <section className="donars">
      <div className=" flex flex-col align-middle md:flex-row md:justify-around lg:flex-row lg:justify-around xl:flex-row xl:justify-around 2xl:flex-row 2xl:justify-around py-5">
        {/* left searchbar */}

        <div className="relative mr-3">
          <div className="absolute top-5 left-3 items-center" ref={clickPoint}>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="block p-2 pl-10 w-70 h-16 text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:pl-3"
            placeholder="Enter Location"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        {/* right filter and filter icon */}

        <div className="search-by-filter">
       <div className="flex justify-center">
       <h3 className="text-xl underline"> Search by map</h3>
        <div className="relative inline-block text-left">
        <div>
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-0 shadow-sm px-4 py-2 bg-white text-sm font-medium  focus:outline-none  " id="menu-button" aria-expanded="true" aria-haspopup="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
            </button>
        </div>

  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
      <a href="#" className="text-gray-300 block px-4 py-2 text-sm font-poppin" role="menuitem" tabindex="-1" id="menu-item-0">Filter by</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">City</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Country</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Ogranization</a>
     
    </div>
  </div>
</div>
       </div>
        </div>
      </div>
    </section>
  );
}
// py-4 px-6
