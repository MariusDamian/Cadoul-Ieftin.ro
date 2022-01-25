import React from "react";
import { preturi } from "./Variables";
import { FcCheckmark } from "react-icons/fc";
import { useContext } from "react";
import { cadouContext } from "../Util/Context";

function FiltrePreturi() {
     const { pret, setPret } = useContext(cadouContext);
     return (
          <div className="w-full bg-stone-100 p-2 rounded-xl">
               <p className="text-left w-full font-semibold mb-3">Preturi</p>
               {preturi.map((qwe) => (
                    <div className="flex flex-row justify-between w-full">
                         <button className="text-left w-full" onClick={() => setPret(qwe)}>
                              Cadouri sub {qwe} lei
                         </button>
                         {qwe === pret ? <FcCheckmark className="text-xl" /> : null}
                    </div>
               ))}
               <button className="text-left w-full" onClick={() => setPret(10000)}>
                    Toate produsele
               </button>
          </div>
     );
}

export default FiltrePreturi;
