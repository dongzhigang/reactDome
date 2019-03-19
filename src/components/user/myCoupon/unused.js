// 我的优惠卷-未使用组件
import React, { Component } from 'react';
import "./unused.scss";

import NoData from "./noData";

import PastDueImg from "../../../assets/images/icon/jijiang.png";

class Unused extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            conponList:[ //未使用列表
            ],
        }
    }
    render(){
        let conponList = this.props.UnusedList;
        return(
            <div className="unused">
            {   !conponList.length? <NoData />:
                conponList.map((v,i)=>{
                    return  <div className="item" key={i}>
                                <img src={v.card_image} alt="优惠卷" className="item_img" />
                                <div className="item_info">
                                    <div className="title">{v.card_integration}积分+{v.card_sum}元</div>
                                    <div className="dosc">{v.card_explain}</div>
                                    <div className="date">有效期至:{v.useful_life}<img src={PastDueImg} className="pastDueImg" alt="即将过期" /></div>
                                </div>
                            </div>
                })
            }
            </div>
        )
    }
}

export default Unused;