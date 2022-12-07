import React from "react";

const FmkoreaCard = ({arr_length}) => {
    return(
        <div className="col-lg-3">
            <div className="card_box">
                <div>
                    <div className="card_count">{arr_length}</div>
                    <div className="card_title">에펨코리아 스크랩 개수</div>
                </div>
                <div className="icon_box">
                    <i className="xi-thumbs-up"></i>
                </div>
            </div>
        </div>
    )
}

export default FmkoreaCard;