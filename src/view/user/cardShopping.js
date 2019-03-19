//卡卷商城
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./cardShopping.scss";

//接口
import {cardShopping} from "../../api/user";

class CardShopping extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            rows:2,
            cardList:[],    //卡卷列表
        }
    }
    //卡卷商城列表
    cardShopping(){
        let data = {
            page:this.state.page,
            rows:this.state.rows
        }
        cardShopping(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    cardList:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentDidMount(){
        this.cardShopping()
        document.title = '卡卷商城';
    }
    render(){
        let cardList = this.state.cardList;
        return(
            <div className="cardShopping">
                <div className="list">
                {   cardList.map((v,i)=>{
                        return  <div className="item" key={i}>
                                    <img src={v.card_image} alt="卡卷图片" className="item_img" />
                                    <div className="item_card">
                                        <div className="title">{v.card_name}</div>
                                        <div className="dosc">{v.card_dosc}</div>
                                    </div>
                                    <Link to={`/cardShoppingDetails/${v.card_id}`}  className="item_look"><span className="item_span">立即兑换</span></Link>
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default CardShopping;