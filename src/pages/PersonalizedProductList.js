import React from "react";
import { useParams } from "react-router-dom";

function PersonalizedProductList() {
     const { personal } = useParams();
     return (
          <div className="text-black mt-20 max-w-7xl mx-auto">
               <p>{personal}</p>
          </div>
     );
}

export default PersonalizedProductList;
