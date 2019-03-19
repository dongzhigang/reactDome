//热销列表组件
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./hotList.scss";

class HotList extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            hotList:[], //商城订单列表
        }
    }
    render(){
        let hotList = this.props.hotList;
        return(
            <div className="hotList">
                <div className="titel">热销排行</div>
                <div className="list">
                {   hotList.map((v,i)=>{
                        return  <Link to={`/cardShoppingDetails/${v.card_id}`} className="item" key={i}>
                                    <img src={v.card_image} alt="商品"  className="item_img" />
                                </Link>
                    })
                }
                </div>
            </div>
        )
    }
}
export default HotList;