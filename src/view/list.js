import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class List extends Component{
    render() {
        return(
            <div>
                <Link to="/storeList" >店铺列表</Link>
                <Link to="/userCenter" >会员中心</Link>
                <Link to="/qrCode" >扫码点餐</Link>
                <Link to="/storeNav" >店铺导航</Link>
            </div>
        )
    }
}
export default List;