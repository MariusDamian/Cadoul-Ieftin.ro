import * as React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
     return (
          <div className="w-full bg-[#e6e6ee] h-16 z-50 top-0 bg-opacity-60 backdrop-blur-lg flex flex-row items-center justify-center text-rose-700 font-medium text-lg fixed shadow-black/20 border-b border-gray-300">
               <div className="flex flex-row items-center max-w-7xl w-full justify-between">
                    <Link to="/" className="flex flex-row items-center">
                         <img src="../images/logo2.png" alt="" />
                         {/* <p className="text-3xl hover:scale-105 transform transition-all duration-300">Cadoulieftin.ro</p> */}
                    </Link>
                    {/* <SearchBar /> */}
                    {/* <div className="flex flex-row space-x-10 ">
                         <p>Parfumuri</p>
                         <p>Jucarii</p>
                         <p>Electronice</p>
                    </div> */}
               </div>
          </div>
     );
}

export default Navbar;
