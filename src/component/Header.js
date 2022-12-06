import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header=()=>{
    let copy_obj = {};
    let i=0;
    const [dom_object, set_dom_object] = useState({
        first_li : true,
        second_li : false,
        third_li : false,
        fourth_li : false,
        fifth_li : false
    });

    const nav_load = (data) => {
        copy_obj = {...dom_object};
        
        for(i=0; i<5; i++){
            Object.keys(copy_obj)[i] === data ? 
            copy_obj[Object.keys(copy_obj)[i]] = true : copy_obj[Object.keys(copy_obj)[i]] = false
        }
        set_dom_object(copy_obj);
    }
 
    return(
        <header>
            <nav className="navigation_wrap">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="icon_wrap">
                                <i className="xi-restaurant xi-2x"></i>
                            </span>
                            <span className="menu_wrap">SaleCapt</span>
                        </Link>
                    </li>
                    <li className={dom_object.first_li === true ? "hovered" : ""}>
                        <Link to="/" onClick={ ()=>{ nav_load("first_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-document xi-2x"></i>
                            </span>
                            <span className="menu_wrap">Main Board</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;