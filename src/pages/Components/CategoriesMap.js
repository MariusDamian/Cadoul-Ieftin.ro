import React from "react";
import categorii from "../categorii.json";
import { HashLink as Link } from "react-router-hash-link";

function CategoriesMap() {
     return (
          <div className="flex flex-row flex-wrap" id="categorii">
               {categorii.map((prodCat) => (
                    <div className="lg:w-1/4 w-1/2 text-center flex flex-col items-center justify-center lg:my-5 px-[6px]">
                         <Link to={prodCat.link}>
                              <img src={`./images/${prodCat.poza}`} alt="" className=" rounded-lg hover:-translate-y-1 transform transition-all duration-500 overflow-hidden cursor-pointer" />
                              <p className="lg:text-2xl text-base text-center font-normal cursor-pointer mt-2">{prodCat.nume}</p>
                         </Link>
                    </div>
               ))}
          </div>
     );
}

export default CategoriesMap;
