//商城订单详情
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./shoppingOrderDetails.scss";

//接口
import {cardOrderDetails} from "../../api/user";

class ShoppingOrderDetails extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            details:{},  
        }
    }
    //订单列表
    cardOrderDetails(){
        let data = {
            coupon_id:this.props.match.params.coupon_id
        }
        cardOrderDetails(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    details:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.cardOrderDetails()
        document.title = '卡卷订单详情';
    }
    render(){
        let details = this.state.details;
        return(
            <div className="shoppingOrderDetails">
                <div className="info">
                    <img src={details.card_image} alt="卡卷图片" className="infoImg" />
                    <div className="info_bt">
                        <div className="name">{details.card_sum>0 && details.card_sum+"元换购"}{details.card_name}</div>
                        <div className="status">订单状态：兑换成功</div>
                    </div>
                </div>
                <div className="rows">
                    <div className="col">购券积分：<span>{details.card_integration}</span></div>
                    <div className="col">订单编号：<span>{details.coupon_num}</span></div>
                    <div className="col">下单时间：<span>{details.convert_date}</span></div>
                </div>
                <Link to={`/cardShoppingDetails/${details.card_id}`} className="but"><span>查看商品详情</span></Link>
            </div>
        )
    }
}

export default ShoppingOrderDetails;