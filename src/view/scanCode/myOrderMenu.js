// 我的下单菜单
import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import "./myOrderMenu.scss";

import MenuTop from "../../components/scanCode/myOrderMenu/menuTop";
import MenuList from "../../components/scanCode/myOrderMenu/menuList";

//接口
import {orderDetails,payOrder} from "../../api/scanCode";

class MyMenu extends Component{
     //构造方法,初始化
     constructor(props) {
        super(props);
        this.state = {
            roderData:[],    //菜品数据
            table_no:this.props.match.params.table_no,
            canteen_id:this.props.match.params.canteen_id
        }
    }
    //订单详情
    orderDetails(){
        let data = {canteen_id:this.state.canteen_id}
        orderDetails(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    roderData:res.data.data
                })
            }
        })
    }
    //支付后的下单菜单
    payOrder(){
        let data = {canteen_id:this.state.canteen_id}
        payOrder(data).then((res)=>{
            if(res.data.code === 200){
                this.props.history.push({pathname:"../../myMenu/" + this.state.canteen_id +"/" + this.state.table_no + "/" + res.data.order_id});
            }
        })
    }
    //生命周期
    componentWillMount(){      
        document.title = '订单详情';
        this.orderDetails();
    }
    render(){
        let table_no = this.state.table_no;
        let canteen_id = this.state.canteen_id;
        let roderData = this.state.roderData;
        return(
            <div className="myOrderMenu">
                <MenuTop table_no={table_no} MenuTop={roderData} canteen_id={canteen_id} />
                <MenuList MenuList={roderData} />
                <div className="but" onClick={this.payOrder.bind(this)}><span>确认下单</span></div>
            </div>
        )
    }
}

export default MyMenu;