import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
//Components 
import Home from "./Pages/Home.js"
import Shop from "./Pages/shop"
function Appt()
{
    return(
        
            <Router>
                <Link to="/shop">Home</Link>
                <Routes>
                    <Route path="/" element ={<Home />} />
                    <Route path="/shop" element ={<Shop />} />
                </Routes>
            </Router>
        
    );
}

export default Appt ; 