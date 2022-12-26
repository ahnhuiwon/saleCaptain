import React, { useEffect } from "react";
import FmkoreaBoard from "./board/FmkoreaBoard";
import PpomppuBoard from "./board/PpomppuBoard";
import useItemLoad from "../customHooks/useItemLoad";
import TotalCard from "./card/TotalCard";
import FmkoreaCard from "./card/FmkoreaCard";
import PpomppuCard from "./card/PpomppuCard";
import CategoryCard from "./card/CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { DeviceWidth } from "../customHooks/useDevice";

const Mainboard=()=>{

    const fm_list = useItemLoad('http://localhost:5000/fmkorea');
    const ppomppu_list = useItemLoad('http://localhost:5000/ppomppu');
    const user_device = DeviceWidth();

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
                { 
                    user_device ?
                    <Swiper loop={true} spaceBetween={50}>
                        <SwiperSlide>
                            <FmkoreaBoard data={fm_list} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PpomppuBoard data={ppomppu_list} />
                        </SwiperSlide>
                    </Swiper>
                    :
                    <>
                        <FmkoreaBoard data={fm_list} />
                        <PpomppuBoard data={ppomppu_list} />
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default Mainboard;