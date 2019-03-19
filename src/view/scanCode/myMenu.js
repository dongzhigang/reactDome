// 我的菜单
import React, { Component } from 'react';
import "./myMenu.scss";

import StoreMsg from "../../components/scanCode/myMenu/storeMsg";
import MyMenuList from "../../components/scanCode/myMenu/myMenuList";

//接口
import {payOrderDetails} from "../../api/scanCode";

class MyMenu extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            orderData:[],    //菜品数据
            table_no:this.props.match.params.table_no,
            canteen_id:this.props.match.params.canteen_id,
            order_id:this.props.match.params.order_id,
            total_prices:0,
        }
    }
    //支付订单详情
    payOrderDetails(){
        let total_prices = 0;
        let data={canteen_id:this.state.canteen_id,order_id:this.state.order_id}
        payOrderDetails(data).then((res)=>{
            if(res.data.code === 200){
                res.data.data.order_list.forEach((v,i)=>{
                    total_prices = parseFloat(total_prices) + v.good_num*parseFloat(v.price)
                })
                res.data.data.order_list_add.forEach((v,i)=>{
                    total_prices = parseFloat(total_prices) + v.good_num*parseFloat(v.price)
                })
                this.setState({
                    orderData:res.data.data,
                    total_prices:total_prices.toFixed(2)
                })
            }
        })
    }
    //生命周期
    componentWillMount(){      
        document.title = '我的菜单';
        this.payOrderDetails();
    }
    render(){
        let table_no = this.state.table_no;
        let orderData = this.state.orderData;
        let totalPrices = this.state.total_prices;
        return(
            <div className="myMenu">
                <StoreMsg table_no={table_no} orderData={orderData} totalPrices={totalPrices} />
                <MyMenuList orderData={orderData} />
            </div>
        )
    }
}

export default MyMenu;