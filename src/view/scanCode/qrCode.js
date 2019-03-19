//扫码点餐-店铺信息
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./qrCode.scss";

import Bg from "../../assets/images/icon/storbg.png";

//接口
import {storeInfo} from "../../api/store";

class QrCode extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            canteen_id:0,    //餐厅id
            table_no:0,    //桌位号
            storlogo:"",    //店铺logo
            canteenName:"", //餐厅名称
        }
    }
    //获取店铺信息
    storeInfo(){
        let data = {canteen_id:this.state.canteen_id}
        storeInfo(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    storlogo:res.data.data.store_logo,
                    canteenName:res.data.data.canteen_name
                })
            }
        })
    }
    componentWillMount(){      
        document.title = '餐厅';
        this.setState({
            canteen_id:this.props.match.params.canteen_id || 1,
            table_no:this.props.match.params.table_no || 8,
        },function(){
            this.storeInfo();
        })
    }
    render(){
        let table_no = this.state.table_no;
        let canteenName = this.state.canteenName;
        let storlogo = this.state.storlogo;
        let canteen_id = this.state.canteen_id;
        return(
            <div className="qrCode">
                <img src={Bg} alt="背景" className="qrCode_img" />
                <div className="info_box">
                    <img src={storlogo} alt="logo" className="info_img" />
                    <div className="info_a">
                        <span>欢迎光临</span>
                        <span className="info_a_bt">{canteenName}   台号:大厅{table_no}</span>
                    </div>
                    <Link to={`../../takingOrder/${canteen_id}/${table_no}`} className="info_but">开始点餐</Link>
                </div>
            </div>
        )
    }
}

export default QrCode;