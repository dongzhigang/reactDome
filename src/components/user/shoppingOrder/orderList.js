//商城订单列表组件
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./orderList.scss";

class OrderList extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            cardList:[],//商城订单列表
        }
    }
    render(){
        let cardList = this.props.cardList;
        return(
            <div className="orderList">
            {   cardList.map((v,i)=>{
                    return  <Link to={`/shoppingOrderDetails/${v.coupon_id}`} className="item" key={i}>
                                <img src={v.card_image} alt="商品"  className="item_img" />
                                <div className="item_info">
            <div className="item_name">{v.card_name}<span>({v.card_integration}积分{ v.card_sum > 0 &&<label>+{v.card_sum}元</label>})</span></div>
                                    <div className="item_date">有效期:{v.useful_life}</div>
                                    <div className="item_dosc">{v.card_explain}</div>
                                    <div className="item_date">兑换日期:{v.convert_date}</div>
                                </div>
                            </Link>
                })
            }
            </div>
        )
    }
}

export default OrderList;