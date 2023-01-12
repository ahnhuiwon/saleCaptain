import React, { useEffect } from "react";
import PpomppuBoard from "./board/PpomppuBoard";
import PpomppuFoodBoard from "./board/PpomppuFoodBoard";
import useItemLoad from "../customHooks/useItemLoad";
import MonitorCard from "./card/MonitorCard";
import FoodCard from "./card/FoodCard";
import CategoryCard from "./card/CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { DeviceWidth } from "../customHooks/useDevice";
import Loading from "./common/Loading";

const Mainboard=()=>{

    const user_device = DeviceWidth();
    const ppomppu_list = useItemLoad(`${process.env.REACT_APP_SERVER_URL}/ppomppu`);
    const ppomppu_food_list = useItemLoad(`${process.env.REACT_APP_SERVER_URL}/food`);

    return(
        <div className="container">
            <div className="main_wrap asd">
                {
                    (ppomppu_list.loading_state && ppomppu_food_list.loading_state) && <Loading />
                }
                <div className="row card_wrap">
                    <MonitorCard arr_length={Number(ppomppu_list.scrap_state.length)} />
                    <FoodCard arr_length={Number(ppomppu_food_list.scrap_state.length)} />
                    <CategoryCard text={"모니터"}/>
                    <CategoryCard text={"식품/건강"}/>
                </div>
                <div className="row friedns_list_wrap">
                { 
                    user_device ?
                    <Swiper loop={true} spaceBetween={50}>
                        <SwiperSlide>
                            <PpomppuBoard data={ppomppu_list.scrap_state} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PpomppuFoodBoard data={ppomppu_food_list.scrap_state} />
                        </SwiperSlide>
                    </Swiper>
                    :
                    <>
                        <PpomppuBoard data={ppomppu_list.scrap_state} />
                        <PpomppuFoodBoard data={ppomppu_food_list.scrap_state} />
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default Mainboard;