//卡卷商品规则
import React, { Component } from 'react';
import "./cardRule.scss";


class CardRule extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            cardRule:[
                {rule_dosc:"1、凭此券可获得价值600元的芝士波士顿龙虾一份,每人限领一张;"},
                {rule_dosc:"2、每张单限用一张卡券；"},
                {rule_dosc:"3、不可与其他卡券同时使用;"},
                {rule_dosc:"4、可以用储值买单。"}
            ],
        }
    }
    render(){
        let cardRule = this.props.cardRule;
        return(
            <div className="cardRule">
                <div className="title">优惠券规则</div>
                {   cardRule.length>0 &&
                    <div className="list">
                    {   cardRule.map((v,i)=>{
                            return <div className="item" key={i}>{v.rule_comtent}</div>
                        })
                    }
                    </div>
                }
            </div>
        )
    }
}

export default CardRule;