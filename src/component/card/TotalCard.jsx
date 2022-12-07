import React from "react";

const TotalCard = ({arr_length}) => {
    return(
        <div className="col-lg-3">
            <div className="card_box">
                <div>
                    <div className="card_count">{arr_length}</div>
                    <div className="card_title">총 스크랩 개수</div>
                </div>
                <div className="icon_box">
                    <i className="xi-eye-o"></i>
                </div>
            </div>
        </div>
    )
}

export default TotalCard;