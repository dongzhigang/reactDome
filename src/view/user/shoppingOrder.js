//商城订单
import React, { Component } from 'react';
import "./shoppingOrder.scss";
import OrderList from "../../components/user/shoppingOrder/orderList";
import HotList from "../../components/user/shoppingOrder/hotList";
import NoData from "../../components/user/shoppingOrder/noData";

//接口
import {cardOrder} from "../../api/user";

class ShoppingOrder extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            cardList:[],        
            hotList:[],
        }
    }
    //订单列表
    cardOrder(){
        cardOrder().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    cardList:res.data.data.cardList,
                    hotList:res.data.data.hotList
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.cardOrder()
        document.title = '卡卷订单';
    }
    render(){
        let cardList = this.state.cardList;
        let hotList  = this.state.hotList;
        return(
            <div className="shoppingOrder">
            {cardList.length?
                <OrderList cardList={cardList} />:
                <NoData />
            }
            {   hotList.length>0 && <HotList hotList={hotList} /> }
            </div>
        )
    }
}
export default ShoppingOrder;