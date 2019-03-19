// 我的优惠卷-没有数据组件
import React, { Component } from 'react';
import "./noData.scss";

import Icon from "../../../assets/images/icon/icon15.png";

class NoData extends Component{
    render(){
        return(
            <div className="noData">
                <div className="box">
                    <img src={Icon} alt="图标" className="box_icon" />
                    <div className="box_a">暂无优惠券可用</div>
                    <div className="box_b">领取优惠券</div>
                </div>
            </div>
        )
    }
}

export default NoData;