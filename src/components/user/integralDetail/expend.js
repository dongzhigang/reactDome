// 积分支出
import React, { Component } from 'react';
import "./expend.scss";

class Expend extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            expendList:[]//支出列表 
        }
    }
    render(){
        let expendList = this.props.Expend;
        return(
            <div className="expend">
                <div className="list">
                {expendList.map((v,i)=>{
                        return  <div className="item" key={i}  >
                                    <img src={v.card_image} alt="优惠卷" className="itemImg" />
                                    <div className="itemRight">
                                        <div className="item_name">{v.card_name}<span className="name_span">({v.card_integration}积分{v.card_sum>0 && <label>+{v.card_sum}元</label>})</span></div>
                                        <div className="item_number">订单编号: {v.coupon_num}</div>
                                        <div className="item_date">兑换日期: {v.convert_date}</div>
                                    </div>
                                </div>
                    })                    
                }
                </div>
            </div>
        )
    }
}
export default Expend;