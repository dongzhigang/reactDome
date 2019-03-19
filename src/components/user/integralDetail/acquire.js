// 积分获取
import React, { Component } from 'react';
import "./acquire.scss";

class Acquire extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            acquireList:[], //支出列表 
        }
    }
    render(){
        let acquireList = this.props.Acquire;
        return(
            <div className="acquire">
                <div className="list">
                {   acquireList.map((v,i)=>{
                        return  <div className="item" key={i}>
                                    <div className="left">餐厅地方:{v.canteen_name}</div>
                                    <div className="right">
                                        <span>消费总额：<label>¥{v.consume_sum}</label></span>
                                        <span>获得积分：<label>{v.acquire_integration}</label></span>
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>
        )
    }
}
export default Acquire;