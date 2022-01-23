import React from "react";
import produse from "./produse.json";
import categorii from "./categorii.json";
import GoToTop from "./GoToTop";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { cadouContext } from "./Util";

function ProductList() {
     const { title } = useParams();
     let filtered = [];
     produse.filter((produs) => produs.category.toLowerCase().includes(title)).map((prodCat) => filtered.push(prodCat.subcategory));
     filtered = filtered.filter((item, index) => filtered.indexOf(item) === index);

     let preturi = [50, 75, 100, 200, 300];

     // Identify category for header title
     let categorie = categorii.filter((category) => category.link === title);

     // SubCategories filter
     const [subCat, setSubCat] = useState("");
     // Price filter context
     const { pret, setPret } = useContext(cadouContext);
     // Load More
     const [nrProd, setNrProd] = useState(32);

     function scrollToTop() {
          window.scrollTo({
               top: 0,
               behavior: "smooth",
          });
     }
     return (
          <div className="h-auto bg-white">
               <Helmet>
                    <title>{categorie[0].nume} | Cadouri ieftine - alege cadoul perfect</title>
                    <meta name="description" content={`Cauti cadoul pefect si ieftin? Alege din colectia noastra speciala de ${categorie[0].nume}`} />
               </Helmet>
               <div className="h-40 w-full mt-16 bg-center" style={{ backgroundImage: `url('/images/${categorie[0].link}Hero.png')` }}>
                    <div className="max-w-7xl w-full  mx-auto h-full flex flex-col justify-end space-y-3 pb-2 px-5 lg:px-0">
                         <p className="text-xl underline underline-offset-2">{categorie[0].nume}</p>
                         <p className="text-base">Cadoul perfect</p>
                         <Link to="/#categorii">
                              <button className="text-sm bg-black max-w-fit px-2 rounded-lg">Inapoi</button>
                         </Link>
                    </div>
               </div>
               <div className="max-w-7xl mx-auto text-black font-medium">
                    <div className="flex flex-row">
                         <div className="min-w-[230px] hidden lg:flex flex-col items-center pt-5 justify-start overflow-y-auto overflow-hidden">
                              {/*  Filtre Preturi */}
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
                              {/*  Filtre Preturi */}
                              {/*  Filtre Subacategorii */}
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
                         </div>
                         {/*  Filtre Subacategorii */}
                         <div className="flex flex-row flex-wrap">
                              {produse
                                   .filter((produs, index) => produs?.category?.toLowerCase().includes(title))
                                   .filter((produs, index) => produs?.subcategory?.includes(subCat))
                                   .filter((produs, index) => produs.price <= pret)
                                   .map(
                                        (produs, key) =>
                                             key < nrProd && (
                                                  <div key={key} className="flex flex-col w-1/2 lg:w-1/4 lg:p-3 lg:px-4 justify-start ">
                                                       <a href={`${produs.aff_code}`} target="_blank" className=" border-gray-400 hover:shadow-2xl">
                                                            <a href={`${produs.aff_code}`} target="_blank" className="overflow-hidden h-60 bg-white  flex items-center justify-center">
                                                                 <img src={`${produs.image_urls}`} alt="" className=" hover:-translate-y-1 transform transition-all duration-300 w-11/12 overflow-hidden" />
                                                            </a>
                                                            <div className="flex flex-col px-2">
                                                                 <p className="h-12 font-light mb-5 lg:mb-0">{produs.title.slice(0, 40)}</p>
                                                                 {produs.price > 1 ? <p className="text-rose-600 font-semibold">{produs.price} Lei</p> : null}
                                                            </div>
                                                       </a>
                                                  </div>
                                             )
                                   )}
                              <GoToTop />
                         </div>
                    </div>
                    {nrProd <= produse.length ? (
                         <div className="w-full flex items-center justify-center pb-10 lg:mt-0 pt-5">
                              <button className="bg-rose-600 hover:bg-rose-800 text-white px-3 py-2 rounded-xl" onClick={() => setNrProd(nrProd + 20)}>
                                   Mai multe produse
                              </button>
                         </div>
                    ) : null}
                    <button className="fixed right-0 bottom-0 mr-10 mb-5 rounded-full p-2 bg-rose-600 text-white text-2xl hover:scale-110 transform transition-all duration-500" onClick={scrollToTop}>
                         <FaArrowAltCircleUp />
                    </button>
               </div>
          </div>
     );
}

export default ProductList;
