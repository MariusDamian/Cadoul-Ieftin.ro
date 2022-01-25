import React, { useContext } from "react";
import SEO from "../Util/SEO";
import HomePagePicture from "../Components/HomePagePicture";
import CategoriesMap from "../Components/CategoriesMap";
import HomeHeader from "../Components/HomeHeader";
import ProductFeedHome from "../Components/ProductFeedHome";
import GoToTop from "../Util/GoToTop";

function HomePage() {
     return (
          <div className="min-h-screen flex items-center justify-center text-black flex-col flex-wrap bg-cover antialiased">
               <SEO title="Gaseste cadoul perfect | Cadoulieftin.ro" description="Cadoul pefect si ieftin exista! Da! Noi te ajutam sa il gasesti, fara batai de cap!" />
               <div className=" h-full w-full flex flex-col justify-start items-center">
                    <div className="max-w-7xl flex flex-col items-center min-h-screen lg:space-y-16 space-y-5 mb-40">
                         <HomeHeader />
                         <CategoriesMap />
                         <ProductFeedHome title="Ceasuri sub 100 de lei" filter="ceasuri" />
                         <ProductFeedHome title="Parfumuri sub 100 de lei" filter="parfumuri" />
                         <ProductFeedHome title="Produse skin care sub 100 de lei" filter="ingrijire" />
                         <ProductFeedHome title="Produse home deco sub 100 de lei" filter="casa" />
                         <ProductFeedHome title="Jucarii sub 100 de lei" filter="jucarii" />
                         <HomePagePicture />
                    </div>
               </div>
               <GoToTop />
          </div>
     );
}

export default HomePage;
