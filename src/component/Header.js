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
                                <i className="xi-facebook-official xi-2x"></i>
                            </span>
                            <span className="menu_wrap">FacePhone</span>
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
                    <li className={dom_object.second_li === true ? "hovered" : ""}>
                        <Link to="/Messenger" onClick={ ()=>{ nav_load("second_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-facebook-messenger xi-2x"></i>
                            </span>
                            <span className="menu_wrap">Messenger</span>
                        </Link>
                    </li>
                    <li className={dom_object.third_li === true ? "hovered" : ""}>
                        <Link to="/Profile" onClick={ ()=>{ nav_load("third_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-profile xi-2x"></i>
                            </span>
                            <span className="menu_wrap">My Profile</span>
                        </Link>
                    </li>
                    <li className={dom_object.fourth_li === true ? "hovered" : ""}>
                        <Link to="/Setting" onClick={ ()=>{ nav_load("fourth_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-cog xi-2x"></i>
                            </span>
                            <span className="menu_wrap">Setting</span>
                        </Link>
                    </li>
                    <li className={dom_object.fifth_li === true ? "hovered" : ""}>
                        <Link to="/SignOut" onClick={ ()=>{ nav_load("fifth_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-log-out xi-2x"></i>
                            </span>
                            <span className="menu_wrap">Sing Out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;