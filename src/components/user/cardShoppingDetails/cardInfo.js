//卡卷商品信息
import React, { Component } from 'react';
import "./cardInfo.scss";

class CardInfo extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            cardInfo:{},    //卡卷信息
        }
    }
    render(){
        let cardInfo = this.props.cardInfo;
        return(
            <div className="cardInfo">
                <div className="name">{cardInfo.card_name}</div>
                <div className="integral">
                    <span>{cardInfo.card_integration}<label className="integral_span">积分</label></span>
                    {   cardInfo.card_sum>0 &&
                        <span>+{cardInfo.card_sum}<label className="integral_span">元</label></span>
                    }
                </div>
                <div className="validity">有效期：{cardInfo.useful_life}</div>
            </div>
        )
    }
}

export default CardInfo;