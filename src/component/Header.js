import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const Header=()=>{

    let copy_obj = {};
    let i=0;

    const [menu_flag, set_menu_flag] = useState(false);
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

    const open_menu = () => {
        set_menu_flag(!menu_flag);
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
                            <span className="menu_wrap">뽐뿌게시판</span>
                        </Link>
                    </li>
                    <li className={dom_object.second_li === true ? "hovered" : ""}>
                        <Link to="/fmkorea" onClick={ ()=>{ nav_load("second_li") } }>
                            <span className="icon_wrap">
                                <i className="xi-document xi-2x"></i>
                            </span>
                            <span className="menu_wrap">에펨코리아 - 핫딜</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="mobile_navigation_wrap">
                <Link to="/" onClick={()=>{ set_menu_flag(false) }}>
                    <h3>SaleCapt</h3>
                </Link>
                <div className="menu_wrap" onClick={()=>{
                    open_menu()
                }}>
                    <AiOutlineMenu />
                </div>
            </nav>
            <ul className="mobile_menu" style={ menu_flag ? { height : "134.391px" } : { height : "0" }}>
                <li>
                    <Link to="/ppomppu">
                        뽐뿌게시판
                    </Link>
                </li>
                <li>
                    <Link to="/fmkorea">
                        에펨코리아 - 핫딜
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;