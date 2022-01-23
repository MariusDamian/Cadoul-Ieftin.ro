import React, { useState, useContext } from "react";
import CategoriesMap from "./Components/CategoriesMap";
import { HashLink as Link } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import GoToTop from "./GoToTop";
import ProductFeedHome from "./Components/ProductFeedHome";
import { cadouContext } from "./Util";

const Home = () => {
     const { pret, setPret } = useContext(cadouContext);
     return (
          <div className="min-h-screen flex items-center justify-center text-black flex-col flex-wrap bg-cover antialiased">
               <Helmet>
                    <title>Gaseste cadoul perfect | Cadoulieftin.ro</title>
                    <meta name="description" content="Cadoul pefect si ieftin exista! Da! Noi te ajutam sa il gasesti, fara batai de cap!" />
               </Helmet>
               <div className=" h-full w-full flex flex-col justify-start items-center">
                    <div className="max-w-7xl flex flex-col items-center min-h-screen lg:space-y-16 space-y-5 mb-40">
                         <div className="mt-20 text-2xl lg:text-7xl font-medium tracking-wide text-center flex flex-col lg:flex-row items-center justify-center">
                              <div className="lg:w-1/2">
                                   <p className="font-semibold">Cauți cadoul perfect?</p>
                                   <p className="lg:text-4xl  text-xl lg:mt-5 text-gray-800">Hai să îl găsim împreună!</p>
                                   <Link smooth to="#categorii">
                                        <button className="lg:text-2xl text-xs bg-rose-600 text-white lg:px-4 px-3  py-1 lg:py-2 rounded-lg hover:bg-rose-800">Începe acum!</button>
                                   </Link>
                              </div>
                              <div className="w-1/2">
                                   <img src="./images/heroImg.png" alt="" className="scale-90" />
                              </div>
                         </div>
                         <CategoriesMap />
                         <ProductFeedHome title="Ceasuri sub 100 de lei" filter="ceasuri" />
                         <ProductFeedHome title="Parfumuri sub 100 de lei" filter="parfumuri" />
                         <ProductFeedHome title="Produse skin care sub 100 de lei" filter="ingrijire" />
                         <ProductFeedHome title="Produse home deco sub 100 de lei" filter="casa" />
                         <ProductFeedHome title="Jucarii sub 100 de lei" filter="jucarii" />
                         <div className="w-full lg:flex items-row hidden">
                              <div className="w-1/3 relative">
                                   <img src="./images/man.png" alt="" />
                                   <div className="absolute inset-0 flex items-end pb-10 justify-center">
                                        <Link to={"cadouri/pentru-el"}>
                                             <button className="lg:text-2xl text-xs bg-rose-600 text-white lg:px-4 px-3  py-1 lg:py-2 rounded-lg hover:bg-rose-800 font-light">Pentru el</button>
                                        </Link>
                                   </div>
                              </div>
                              <div className="w-1/3 bg-slate-900 relative flex flex-col items-center justify-center">
                                   <div className="w-full flex flex-row items-center justify-center">
                                        <div className="w-1/2">
                                             <img src="./images/1.png" alt="" className="p-1" />
                                             <img src="./images/2.png" alt="" className="p-1" />
                                        </div>
                                        <div className="w-1/2">
                                             <img src="./images/3.png" alt="" className="p-1" />
                                             <img src="./images/4.png" alt="" className="p-1" />
                                        </div>
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
                    </div>
               </div>
               <GoToTop />
          </div>
     );
};

export default Home;
