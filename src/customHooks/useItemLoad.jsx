import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Sweetalert_class } from "../utils/sweetalertClass";
import { FilterClass } from "../utils/filterClass";


/**
 * SweetAlert Class
 *
 * @param url 스크랩 사이트 url
 */
const useItemLoad = (url) => {

    const [scrap_state, set_scrap_state] = useState([]);
    const [loading_state, set_loading_state] = useState(false);

    let class_put, filter_put;


    // api 호출 함수
    const send_request = async () => {
        const { data, status, statusText } = await axios.get(url);

        if (status === 200 && statusText === 'OK') {
            filter_put = new FilterClass(data, url);
            const filter_value = filter_put.branch_filter();

            set_scrap_state(filter_value);

            set_loading_state(false);
        } else {
            class_put = new Sweetalert_class();
            class_put.designated_alert();
        }
    }


    // useEffect
    useEffect(() => {

        set_loading_state(true);

        set_scrap_state([]);

        send_request();

        const refresh_ui = setInterval(() => { send_request() }, 10 * 60 * 1000);

        return () => clearInterval(refresh_ui);
    }, []);

    return { scrap_state, loading_state };
}

export default useItemLoad;