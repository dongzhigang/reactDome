import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./storeLogo.scss";

import integralIcon from "../../../assets/images/icon/icon06.png";
import columnIcon from "../../../assets/images/icon/icon07.png";
import haveIcon from "../../../assets/images/icon/icon08.png";

class StoreLogo extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            user_card:props.userCard        
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            user_card: nextProps.userCard,
        })
    }
    render() {
        let user_card = this.state.user_card;
        return(
            <div className="storeLogo">
                <div className="storeImg">
                    <div className="logo">
                        <img src={user_card} alt="会员卡" className="logoImg" />
                        {/* <div className="serialNumber">NO.12480898</div> */}
                    </div>
                </div>
                <div className="list">
                    <Link to="/myIntegral" className="item">
                        <img src={integralIcon} alt="我的积分" className="item_icon" />
                        <span>我的积分</span>
                    </Link>
                    <Link to="/myCoupon" className="item">
                        <img src={columnIcon} alt="我的优惠券" className="item_icon" />
                        <span>我的优惠券</span>
                    </Link>
                    <Link to="/dinnerRecord" className="item">
                        <img src={haveIcon} alt="用餐记录" className="item_icon" />
                        <span>用餐记录</span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default StoreLogo;