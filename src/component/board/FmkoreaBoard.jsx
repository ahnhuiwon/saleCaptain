import React from "react";

const FmkoreaBoard = ({data}) => {

    return(
        <div className="col-lg-6">
            <div className="list_order">
                <div className="list_header">
                    <h2>에펨코리아 - 핫딜</h2>
                </div>
                <table>
                    <tbody>
                        {
                            data.length !== 0 &&
                            data.map((data, index) => (
                                <a className="list_link" href={`${data.lnk}`} key={index} target="_blank">
                                    <tr>
                                        <td>{data.title}</td>
                                        <td>{data.price}</td>
                                        <td>{data.shop}</td>
                                        <td>{data.date}</td>
                                    </tr>
                                </a>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FmkoreaBoard;