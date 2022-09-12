import React from "react";
import {useNavigate} from "react-router-dom";
function Shop()
{
    let navigate = useNavigate();
    return(
        <div>
            Shop
            <a style={{cursor:'pointer'}} onClick={function(){
                navigate("/");
            }}>click</a>
        </div>
    );
}

export default Shop ;