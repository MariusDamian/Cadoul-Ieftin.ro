import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function HomePagePicture() {
     return (
          <div className="w-full lg:flex items-row hidden text-white">
               <div className="w-1/3 relative">
                    <img src="./images/man.png" alt="" />
                    <div className="absolute inset-0 flex items-end pb-10 justify-center">
                         <Link to={"cadouri/pentru-el"}>
                              <button className="lg:text-2xl text-xs bg-rose-600 text-white lg:px-4 px-3  py-1 lg:py-2 rounded-lg hover:bg-rose-800 font-light">Pentru el</button>
                         </Link>
                    </div>
               </div>
               <div className="w-1/3 bg-slate-900 relative flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center">
                         <p>Cadoul perfect exista!</p>
                         <p>Niciodata nu a fost mai usor sa il gasesti!</p>
                    </div>
               </div>
               <div className="w-1/3 relative">
                    <img src="./images/lady.png" alt="" />
                    <div className="absolute inset-0 flex items-end pb-10 justify-center">
                         <Link to={"cadouri/pentru-ea"}>
                              <button className="lg:text-2xl text-xs bg-rose-600 text-white lg:px-4 px-3  py-1 lg:py-2 rounded-lg hover:bg-rose-800 font-light">Pentru ea</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default HomePagePicture;
