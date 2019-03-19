// 我的优惠卷-已失效组件
import React, { Component } from 'react';
import "./pastDue.scss";

import NoData from "./noData";

import PastDueImg from "../../../assets/images/icon/guoqi.png";


class PastDue extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            conponList:[ //已失效列表
            ],
        }
    }
    render(){
        let conponList = this.props.PastDueList;
        return(
            <div className="haveBeenUsed">
                <div className="list">
                { !conponList.length? <NoData />:
                    conponList.map((v,i)=>{
                        return  <div className="item" key={i}>
                                    <img src={v.card_image} alt="优惠卷" className="item_img" />
                                    <div className="item_info">
                                        <div className="title">{v.card_integration}积分+{v.card_sum}元</div>
                                        <div className="dosc">{v.card_explain}</div>
                                        <div className="date">有效期至:{v.useful_life}</div>
                                    </div>
                                    <div className="mark"><img src={PastDueImg} className="pastDueImg" alt="已失效" /></div>
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default PastDue;