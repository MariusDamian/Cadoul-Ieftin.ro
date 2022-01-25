import React from "react";
import { preturi } from "./Variables";
import { FcCheckmark } from "react-icons/fc";
import { useContext } from "react";
import { cadouContext } from "../Util/Context";

function FiltreSubcategorii() {
     return (
          <div className="w-full bg-stone-100 p-2 rounded-xl mt-6">
               <p className="text-left w-full font-semibold mb-3">Categorii</p>
               {filtered.map((subCats) =>
                    subCats !== undefined ? (
                         <div className="flex flex-row justify-between w-full">
                              <button className="text-left w-full" onClick={() => setSubCat(subCats)}>
                                   {subCats}
                              </button>
                              {subCats === subCat ? <FcCheckmark className="text-xl" /> : null}
                         </div>
                    ) : null
               )}
               <button className="text-left w-full" onClick={() => setSubCat("")}>
                    Toate produsele
               </button>
          </div>
     );
}

export default FiltreSubcategorii;
