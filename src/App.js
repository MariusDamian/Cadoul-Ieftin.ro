import { createBrowserHistory } from "history";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Files/Pages/HomePage";
import Navbar from "./Files/Pages/Navbar";
import PersonalizedProductList from "./Files/Components/PersonalizedProductList";
import ProductList from "./Files/Pages/ProductList";
import { cadouContext } from "./Files/Util/Context";

function App() {
     const customHistory = createBrowserHistory();
     const [pret, setPret] = useState(100000);
     return (
          <Router history={customHistory}>
               <Navbar />
               <cadouContext.Provider value={{ pret, setPret }}>
                    <Routes>
                         <Route path="/" exact element={<HomePage />} />
                         <Route path=":title" element={<ProductList />} />
                         <Route path="/cadouri/:personal" element={<PersonalizedProductList />} />
                    </Routes>
               </cadouContext.Provider>
          </Router>
     );
}

export default App;
