import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function HomeHeader() {
     return (
          <div className="mt-20 text-2xl lg:text-7xl font-medium tracking-wide text-center flex flex-col lg:flex-row items-center justify-center">
               <div className="lg:w-1/2">
                    <p className="font-semibold">Cauți cadoul perfect?</p>
                    <p className="lg:text-4xl  text-xl lg:mt-5 text-gray-800">Hai să îl găsim împreună!</p>
                    <Link smooth to="#categorii">
                         <button className="lg:text-2xl text-xs bg-rose-600 text-white lg:px-4 px-3  py-1 lg:py-2 rounded-lg hover:bg-rose-800">Începe</button>
                    </Link>
               </div>
               <div className="w-1/2">
                    <img src="../images/heroImg.png" alt="" className="scale-90" />
               </div>
          </div>
     );
}

export default HomeHeader;
