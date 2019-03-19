//店铺导航
import React, { Component } from 'react';
import "./storeNav.scss";

import SiteImg from "../../assets/images/icon/icon19.png";
import PhoneImg from "../../assets/images/icon/icon18.png";

//接口
import {canteenAll} from "../../api/store";

class StoreNav extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            storeNav:[ //商城订单列表
                
            ],
        }
    }
    canteenAll(){
        canteenAll().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    storeNav:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentDidMount(){
        this.canteenAll()
        document.title = '店铺导航';
    }
    render(){
        let storeNav = this.state.storeNav;
        return(
            <div className="storeNav">
                <div className="title">全部门店</div>
                <div className="list">
                {   storeNav.map((v,i)=>{
                        return  <div className="item" key={i}>
                                    <div className="item_left">
                                        <img src={v.canteen_logo} alt="店铺图片" className="item_img" />
                                        <div className="item_info">
                                            <div className="item_name">{v.canteen_name}</div>
                                            <div className="item_a">
                                                <img src={SiteImg} alt="地址" className="site_img" />
                                                <span>{v.address}</span>
                                            </div>
                                            <div className="item_a">
                                                <img src={PhoneImg} alt="电话" className="site_img" />
                                                <a href={`tel:${v.phone}`} className="span_cor">{v.phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="./" className="item_right">
                                        <span>查找</span>
                                        <span>店铺</span>
                                    </a>
                                </div>
                    })                    
                }
                </div>
            </div>
        )
    }
}

export default StoreNav;