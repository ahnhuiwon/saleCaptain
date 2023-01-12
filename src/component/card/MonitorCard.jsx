import React from "react";

const MonitorCard = ({ arr_length }) => {
    return (
        <div className="col-lg-3">
            <div className="card_box">
                <div>
                    <div className="card_count">{arr_length}</div>
                    <div className="card_title">모니터 키워드 스크랩 개수</div>
                </div>
                <div className="icon_box">
                    <i className="xi-eye-o"></i>
                </div>
            </div>
        </div>
    )
}

export default MonitorCard;