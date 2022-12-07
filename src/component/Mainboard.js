import React, { useEffect } from "react";
import { useState } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import Card_component from "./Card_component";
import user_pic from "../img/user_info2.png";
import axios from "axios";
import FmkoreaBoard from "./board/FmkoreaBoard";
import PpomppuBoard from "./board/PpomppuBoard";
import useItemLoad from "../customHooks/useItemLoad";
import TotalCard from "./card/TotalCard";
import FmkoreaCard from "./card/FmkoreaCard";
import PpomppuCard from "./card/PpomppuCard";
import CategoryCard from "./card/CategoryCard";

const Mainboard=()=>{

    const fm_list = useItemLoad('http://localhost:5000/fmkorea');
    const ppomppu_list = useItemLoad('http://localhost:5000/ppomppu');

    return(
        <div className="container">
            <div className="main_wrap asd">
                <div className="row card_wrap">
                    <TotalCard arr_length={Number(fm_list.length)+Number(ppomppu_list.length)} />
                    <FmkoreaCard arr_length={Number(fm_list.length)} />
                    <PpomppuCard arr_length={Number(ppomppu_list.length)} />
                    <CategoryCard />
                </div>
                <div className="row friedns_list_wrap">
                    <FmkoreaBoard data={fm_list} />
                    <PpomppuBoard data={ppomppu_list} />
                </div>
            </div>
        </div>
    )
}

export default Mainboard;