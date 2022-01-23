import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { cadouContext } from "./pages/Util";
import { useState } from "react";
import PersonalizedProductList from "./pages/PersonalizedProductList";

function App() {
     const customHistory = createBrowserHistory();
     const [pret, setPret] = useState(55500);
     return (
          <Router history={customHistory}>
               <Navbar />
               <cadouContext.Provider value={{ pret, setPret }}>
                    <Routes>
                         <Route path="/" exact element={<Home />} />
                         <Route path=":title" element={<ProductList />} />
                         <Route path="/cadouri/:personal" element={<PersonalizedProductList />} />
                    </Routes>
               </cadouContext.Provider>
          </Router>
     );
}

export default App;
