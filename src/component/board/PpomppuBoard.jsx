import React from "react";

const PpomppuBoard = ({data}) => {

    return(
        <div className="col-lg-6">
            <div className="list_order">
                <div className="list_header">
                    <h2>뽐뿌게시판</h2>
                </div>
                <table>
                    <tbody>
                        {
                            data.length !== 0 &&
                            data.map((data, index) => (
                                <a className="list_link_other" href={`${data.lnk}`} key={index} target="_blank">
                                    <tr>
                                        <td>{data.title}</td>
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

export default PpomppuBoard;