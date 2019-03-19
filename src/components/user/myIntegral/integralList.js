import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./integralList.scss";
import Icon from "../../../assets/images/icon/icon14.png";

class IntegralList extends Component{
    render() {
        return(
            <div className="IntegralList">
                <div className="list">
                    <Link to="/integralDetail" className="item">
                        <span>积分明细</span>
                        <img src={Icon} alt="方向" className="item_icon" />
                    </Link>
                    <Link to="/shoppingOrder" className="item">
                        <span>兑换记录</span>
                        <img src={Icon} alt="方向" className="item_icon" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default IntegralList