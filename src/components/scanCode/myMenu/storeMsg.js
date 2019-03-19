// 我的菜单-店铺信息
import React, { Component } from 'react';
import "./storeMsg.scss";

import Site from "../../../assets/images/icon/icon19.png";

class StoreMsg extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            orderData:{},
        }
    }
    render(){
        let table_no = this.props.table_no;
        let orderData = this.props.orderData;
        let totalPrices = this.props.totalPrices;
        return(
            <div className="storeMsg">
                <div className="rows">
                    <div className="col">
                        <div className="name">{orderData.canteen_info && orderData.canteen_info.canteen_name}</div>
                        <img src={Site} alt="地点" className="site_img" />
                    </div>
                    <div className="col">
                        <div className="deta">2018-12-08 12:05:46</div>
                    </div>
                    <div className="col">
                        <span className="col_bt">就餐桌号:<label>{table_no}</label></span>
                        <span className="col_bt">应收金额:<label>{totalPrices}</label></span>
                    </div>
                </div>
                <div className="list">
                    <div className="item">
                        <span>订单编号</span>
                        <label>{orderData && orderData.order_num}</label>
                    </div>
                    <div className="item">
                        <span>点餐日期</span>
                        <label>{orderData && orderData.create_date}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreMsg;