import React, { useEffect } from "react";
import { useState } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import Card_component from "./Card_component";
import user_pic from "../img/user_info2.png";
import axios from "axios";

const Mainboard=()=>{
    const [component_contents, set_component_contents] = useState({
        component : [
            {
                id : 1,
                title : "Total up",
                count : 1504,
                icon : "xi-eye-o"
            },
            {
                id:2,
                title : "Today up",
                count : 10,
                icon : "xi-eye-o",
            },
            {
                id : 3,
                title : "Favorites",
                count : 30,
                icon : "xi-thumbs-up"
            },
            {
                id : 4,
                title : "Keyword",
                count : 5,
                icon : "xi-message-o"
            }
        ]
    });

    const send_request = async() => {
        const response = await axios.get('http://localhost:8080/about_router');
        console.log(response);
        console.log(response.data); 
    }

    useEffect(()=>{
        send_request();
    }, [])

    //메뉴 토글 플래그 값 변경

    return(
        <div className="main_wrap">
            <div className="topbar_wrap">
                <div className="search_wrap">
                    <label>
                        <input type="text" placeholder="Search" />
                        <i className="xi-search xi-2x"></i>
                    </label>
                </div>
            </div>
            <div className="card_wrap">
            {
                component_contents.component.map(contents=>(
                    <Card_component key={contents.id} attr={contents}/>
                ))
            }
            </div>
            {/*친구 리스트*/}
            <div className="friedns_list_wrap">
                <div className="list_order">
                    <div className="list_header">
                        <h2>에펨코리아 - 핫딜</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="list_order">
                    <div className="list_header">
                        <h2>뽐뿌게시판</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="list_order">
                    <div className="list_header">
                        <h2>퀘이사존</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                            <tr>
                                <td>04:00</td>
                                <td>모니터</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mainboard;