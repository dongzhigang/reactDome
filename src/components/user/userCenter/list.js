import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./list.scss";
import datumIcon from "../../../assets/images/icon/icon09.png";
import mallIcon from "../../../assets/images/icon/icon10.png";
import orderIcon from "../../../assets/images/icon/icon11.png";
import recordIcon from "../../../assets/images/icon/icon12.png";


import VIPIcon from "../../../assets/images/icon/icon13.png";
import nextIcon from "../../../assets/images/icon/icon14.png";

class List extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {
                    name:"",
                    icon:datumIcon,
                    vip:true,
                    url:"/personalData",
                },
                {
                    name:"卡券商城",
                    icon:mallIcon,
                    url:"/cardShopping",
                },
                {
                    name:"商城订单",
                    icon:orderIcon,
                    url:"/shoppingOrder",
                },
                {
                    name:"储值消费记录",
                    icon:recordIcon,
                    money:true,
                    url:"/expenseRecord",
                }
            ]
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            userName: nextProps.userName,
        })
    }
    render() {
        let list = this.state.list;
        list[0].name = this.props.userName;
        return(
            <div className="list">
                <div className="rows">
                    {list.map((v,i)=>{
                        return  <Link to={v.url} className="col" key={i}>
                                    <span className="line">
                                        <img src={v.icon} alt={v.name} className="col_icon" />
                                        <label>{v.name}</label>
                                    </span>
                                    <span className="line">
                                        {v.vip &&
                                            <img src={VIPIcon} alt="VIP" className="col_vip" />
                                        }
                                        {v.money &&
                                            <span className="money">可用余额:0</span>
                                        }
                                        <img src={nextIcon} alt="VIP" className="col_next" />
                                    </span>
                                </Link>
                    })}
                </div>
            </div>
        )
    }
}
export default List;