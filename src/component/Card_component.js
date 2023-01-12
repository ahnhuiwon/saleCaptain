import React from "react";
import { useState } from "react";

const Card_component=(props)=>{
    const [props_val, set_props_val] = useState(props.attr);

    return(
        <div className="card_box">
            <div>
                <div className="card_count">{`${props_val.count}`}</div>
                <div className="card_title">{`${props_val.title}`}</div>
            </div>
            <div className="icon_box">
                <i className={`${props_val.icon}`}></i>
            </div>
        </div>
    )
}

export default Card_component;