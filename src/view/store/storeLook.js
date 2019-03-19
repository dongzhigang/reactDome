//查看门店
import React, { Component } from 'react';
import "./storeLook.scss";

import SiteImg from "../../assets/images/icon/icon19.png";
import PhoneImg from "../../assets/images/icon/icon18.png";

//接口
import {storeLook} from "../../api/store";

class StoreLook extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
			page:1,
			rows:4,
			lng_lat:"113.339916,23.141081",	//当前经纬度
            storeListData:[]
        }
    }
    //餐厅列表
    storeLook(){
        let data = {
            card_id:this.props.match.params.card_id
        }
        storeLook(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    storeListData:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
	componentDidMount(){
        this.storeLook()
        document.title = '查看门店';
	}
    render(){
        let storeListData =this.state.storeListData;
        console.log(this.state.storeListData)
        return(
            <div className="storeLook">
            {   storeListData.map((v,i)=>{
                    return  <div className="item" key={i}>
                                <img src={v.canteen_logo} alt="餐厅logo" className="item_img" />
                                <div className="item_info">
                                    <div className="item_name">{v.canteen_name}</div>
                                    <div className="address">
                                        <img src={SiteImg} alt="地址" className="address_img" />
                                        <span>{v.address}</span>
                                    </div>
                                    <a href={`tel:${v.phone}`} className="address">
                                        <img src={PhoneImg} alt="号码" className="address_img" />
                                        <span className="phone">{v.phone}</span>
                                    </a>                        
                                </div>
                            </div>
                })

            }
            </div>
        )
    }
}

export default StoreLook;