import React from "react";
import produse from "../produse.json";
import { HashLink as Link } from "react-router-hash-link";
import { cadouContext } from "../Util";
import { useContext } from "react";

function ProductFeedHome(props) {
     let keyIndex = 13;
     const { pret, setPret } = useContext(cadouContext);
     return (
          <div>
               <div className="flex flex-row justify- justify-between">
                    <Link to={`/${props.filter}`} onClick={() => setPret(100)}>
                         <p className="text-xl px-2 font-normal mb-3 text-gray-900 transform transition-all duration-500  hover:text-rose-600">{props.title}</p>
                    </Link>
               </div>
               <div className="w-full flex flex-row flex-wrap">
                    {produse
                         .filter((produs, index) => produs?.category?.toLowerCase().includes(props.filter))
                         .filter((produs, index) => produs?.price < 100)
                         .map(
                              (produs, key) =>
                                   keyIndex + 7 > key &&
                                   key > keyIndex && (
                                        <div key={key} className="flex flex-col w-1/2 lg:w-1/6 lg:px-2 justify-start">
                                             <a href={`${produs.aff_code}`} target="_blank" className="border border-slate-300 hover:shadow-2xl rounded-lg transition-all duration-300">
                                                  <a href={`${produs.aff_code}`} target="_blank" className="overflow-hidden h-60 bg-white  flex items-center justify-center rounded-t-lg">
                                                       <img src={`${produs.image_urls}`} alt="" className="w-11/12 overflow-hidden rounded-lg" />
                                                  </a>
                                                  <div className="flex flex-col px-2 text-center">
                                                       <p className="h-12 font-normal lg:text-base text-sm">{produs.title.slice(0, 35)}</p>
                                                       {produs.price > 1 ? <p className="text-rose-600 font-normal">{produs.price} Lei</p> : null}
                                                  </div>
                                             </a>
                                        </div>
                                   )
                         )}
               </div>
          </div>
     );
}

export default ProductFeedHome;
