import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { BiSearchAlt } from "react-icons/bi";
import { HashLink as Link } from "react-router-hash-link";
import produse from "./produse.json";

function SearchBar() {
     const [filteredData, setFilteredData] = useState([]);
     const [wordEntered, setWordEntered] = useState("");
     const handleFilter = (event) => {
          const searchWord = event.target.value;
          setWordEntered(searchWord);
          const newFilter = produse.filter((value) => {
               return value.title.toLowerCase().includes(searchWord.toLowerCase());
          });
          if (searchWord === "") {
               setFilteredData([]);
          } else {
               setFilteredData(newFilter);
          }
     };

     const clearInput = () => {
          setFilteredData([]);
          setWordEntered("");
     };
     return (
          <div className=" h-full">
               <div className="relative">
                    <input type="text" className="rounded-2xl h-10 bg-gray-200 px-5 text-black font-normal w-96 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent shadow-2xl" placeholder="Caută produs..." onChange={handleFilter} value={wordEntered} />
                    <div className="absolute inset-y-0 right-0 text-2xl mr-2 mt-1 text-rose-600 flex items-center">{wordEntered.length === 0 ? <BiSearchAlt className="text-rose-600" /> : <AiFillCloseCircle onClick={clearInput} className="cursor-pointer" />}</div>
               </div>
               {filteredData.length !== 0 && (
                    <div className="overflow-hidden h-72 overflow-y-auto absolute w-1/4 scrollbar-hidden bg-white p-2 rounded-2xl text-black mt-2 font-light border-2 border-gray-400">
                         {filteredData.map(
                              (produs, index) =>
                                   index < 30 && (
                                        <a href={`${produs.aff_code}`} target="_blank" className="flex flex-row items-center mb-3 justify-center hover:bg-slate-200 py-1 overflow-hidden">
                                             <img src={`${produs.image_urls}`} alt="" className="w-1/6 hover:scale-105 transform transition-all duration-300 rounded-lg mx-3" />
                                             <p className="w-2/3 font-normal">{produs.title.slice(0, 60)}</p>
                                             <p className="text-sm font-semibold text-rose-600 min-w-max">{produs.price} ron</p>
                                        </a>
                                   )
                         )}
                    </div>
               )}
          </div>
     );
}

export default SearchBar;
