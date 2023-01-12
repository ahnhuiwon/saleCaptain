import React from "react";
import HashLoader from "react-spinners/HashLoader";
import '../../style/component/loading.scss';

const Loading = () => {
    return(
        <>
            <div className="loading_wrap">
                <div className="loading_box">
                    <div className="text_wrap">
                        <h4>Loading</h4>
                        <p>데이터를 가져오고 있습니다.<br />잠시만 기다려주세요.</p>
                    </div>
                    <HashLoader color={"#483d8b"} size={200}/>
                </div>
            </div>
        </>
    )
}

export default Loading;