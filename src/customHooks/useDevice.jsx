import React, { useEffect, useState } from "react";


/**
 * 반응형을 위한 사용자 디바이스 width 측정 메소드
 * @returns 상태값 type boolean
 */
export const DeviceWidth = () => {

    const [mobile_devide, set_mobile_device] = useState(false);

    useEffect(() => {
        const user_device = window.innerWidth;
        if (user_device < 767) {
            set_mobile_device(true);
        } else {
            set_mobile_device(false);
        }
    }, []);

    return mobile_devide;
}