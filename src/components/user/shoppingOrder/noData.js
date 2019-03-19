//没有数据组件
import React, { Component } from 'react';
import "./noData.scss";

class NoData extends Component{
    render(){
        return(
            <div className="shoppingOrder_noData">
                <div className="box">
                    <div className="top">您暂无购买的优惠</div>
                    <div className="base">逛逛商城</div>
                </div>
            </div>
        )
    }
}

export default NoData;