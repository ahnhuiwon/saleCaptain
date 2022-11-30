import React from "react";
import { useState } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import Card_component from "./Card_component";
import user_pic from "../img/user_info2.png";

const Mainboard=()=>{
    const [component_contents, set_component_contents] = useState({
        component : [
            {
                id : 1,
                title : "Daily View",
                count : 1504,
                icon : "xi-eye-o"
            },
            {
                id:2,
                title : "Friends",
                count : 10,
                icon : "xi-man",
            },
            {
                id : 3,
                title : "Like",
                count : 30,
                icon : "xi-thumbs-up"
            },
            {
                id : 4,
                title : "Messege",
                count : 5,
                icon : "xi-message-o"
            }
        ]
    });

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
                        <h2>Friends List</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Number</td>
                                <td>Email</td>
                                <td>Gender</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>안희원</td>
                                <td>010-8412-8930</td>
                                <td>huiwonan882@gmail.com</td>
                                <td><span className="gender_wrap box">남자</span></td>
                            </tr>
                            <tr>
                                <td>최종윤</td>
                                <td>010-2105-5061</td>
                                <td>cjo0927@naver.com</td>
                                <td><span className="gender_wrap box">남자</span></td>
                            </tr>
                            <tr>
                                <td>장수혁</td>
                                <td>010-7758-0339</td>
                                <td>sh1230@naver.com</td>
                                <td><span className="gender_wrap box">남자</span></td>
                            </tr>
                            <tr>
                                <td>서유준</td>
                                <td>010-5395-5051</td>
                                <td>tomzzang@naver.com</td>
                                <td><span className="gender_wrap box">남자</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="user_info_wrap">
                    <div className="list_header">
                        <h2>Friends info</h2>
                    </div>
                    <div className="info_wrap">
                        <div className="user_pic_wrap">
                            <img className="pic_class" src={user_pic} alt="아이유 사진" />
                        </div>
                        <div className="user_info_input">
                            <div className="input-group input_class">
                                <span className="input-group-text alert-primary">이름</span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="input-group input_class">
                                <span className="input-group-text alert-primary">핸드폰 번호</span>
                                <input type="Number" className="form-control" placeholder="-를 제외하고 입력해주세요"/>
                            </div>
                            <div className="input-group input_class">
                                <span className="input-group-text alert-primary">이메일</span>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="check_wrap">
                                <div className="form-check select_first">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    남자
                                  </label>
                                </div>
                                <div className="form-check select_second">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    여자
                                  </label>
                                </div>
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic outlined example">
                              <button type="button" className="btn btn-outline-primary">수정</button>
                              <button type="button" className="btn btn-outline-primary">삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainboard;