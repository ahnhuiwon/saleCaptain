import React from "react";

const CategoryCard = ({ text }) => {
    return (
        <div className="col-lg-3">
            <div className="card_box">
                <div>
                    <div className="card_count">{text}</div>
                    <div className="card_title">카테고리</div>
                </div>
                <div className="icon_box">
                    <i className="xi-tag"></i>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;