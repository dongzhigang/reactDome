// 卡卷商城-详情
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./cardShoppingDetails.scss";

import CardInfo from "../../components/user/cardShoppingDetails/cardInfo";
import CardRule from "../../components/user/cardShoppingDetails/cardRule";

import nextIcon from "../../assets/images/icon/icon14.png";
import Icon from "../../assets/images/icon/x.png";

//接口
import {cardShoppingDetails} from "../../api/user";

class CardShoppingDetails extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            hasDialog:false,        //规则弹窗显示隐藏
            cardDetails:{},         //卡卷详情
            cardRule:{},           //优惠卷规则
        }
    }
    //切换弹窗
    tapDialog(){
        this.setState({
            hasDialog:!this.state.hasDialog
        })
    }
    //卡卷数据
    cardShoppingDetails(){
        let data = {
            card_id:this.props.match.params.card_id
        }
        cardShoppingDetails(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    cardDetails:res.data.data.card_details,
                    cardRule:res.data.data.card_rule
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.cardShoppingDetails()
        document.title = '卡卷商城详情';
    }
    render(){
        let hasDialog = this.state.hasDialog;
        let cardDetails = this.state.cardDetails;
        let cardRule = this.state.cardRule;
        return(
            <div className="cardShoppingDetails">
                <img src={cardDetails.card_image} className="details_img" alt="卡卷图片" />
                <div className="details_info">
                    <div className="info_box">
                        <CardInfo cardInfo={cardDetails} />
                        <Link to={`/storeLook/${cardDetails.card_id}`} className="look"><span>查看适用的门店</span><img src={nextIcon} alt="跳转" className="nextIcon" /></Link>
                        <CardRule cardRule={cardRule} />
                    </div>
                </div>
                <div className="exchange">
                    <div className="left">
                        <div className="col">
                            <span>{cardDetails.card_integration}</span>
                            <label>积分</label>
                        </div>
                        {cardDetails.card_sum>0 && 
                            <div className="col">
                                <span>+{cardDetails.card_sum}</span>
                                <label>元</label>
                            </div>
                        }
                    </div>
                    <div className="rigth" onClick={this.tapDialog.bind(this)}>立即兑换</div>
                </div>
                {/* 弹窗 */}
                {hasDialog &&
                    <div className="dialog" >
                        <div className="dialog_box">
                            <div className="title">积分兑换<div className="del"><img src={Icon} alt="删除" className="del_img" onClick={this.tapDialog.bind(this)} /></div></div>
                            <div className="content">确定使用{cardDetails.card_integration}积分兑换?</div>
                            <div className="base">
                                <span className="col" onClick={this.tapDialog.bind(this)}>取消</span>
                                <span className="col">确定</span>
                            </div>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default CardShoppingDetails;