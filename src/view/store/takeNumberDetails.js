//取号详情
import React, { Component } from 'react';
import "./takeNumberDetails.scss";

import Xl from "../../assets/images/icon/xl.png";
import Qx from "../../assets/images/icon/qx.png";
import Dw from "../../assets/images/icon/dw.png";

import PopupWindows from "../../components/store/takeNumberDetails/popupWindows";

//接口
import {takeNumberDetails,canteenCancel} from "../../api/store";

class TakeNumberDetails extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            takeNumberData:{},
            hasCancel:false,
        }
    }
    //取号详情
    takeNumberDetails(){
        let data = {"queue_id":this.props.match.params.queue_id}
        takeNumberDetails(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    takeNumberData:res.data.data
                })
            }
        })
    }
    //判断是否取消
    hasCancel(){
        this.setState({
            hasCancel:!this.state.hasCancel
        })
    }
    //取消排队
    canteenCancel(){      
        let data = {
            queue_id:this.props.match.params.queue_id
        }
        canteenCancel(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    hasCancel:!this.state.hasCancel
                })
                this.takeNumberDetails()
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.takeNumberDetails()
        document.title = '取号详情';
    }

    render(){
        let takeNumberData = this.state.takeNumberData;
        let hasCancel = this.state.hasCancel;
        return(
            <div className="takeNumberDetails">
                <div className="top">
                    <div className="top_col">
                        <img src={takeNumberData.queue_status>0?Xl:Qx} alt="取号" className="top_img" />
                        <span className="top_font">{takeNumberData.queue_status>0?"已取号":"已取消"}</span>
                    </div>
                    <div className="top_col col_wt">
                        <ul className="top_ul">
                            <li>{takeNumberData.canteen_hint}</li>
                        </ul>
                    </div>
                </div>
                <div className="food_box">
                    <div className="name">{takeNumberData.canteen_name}</div>
                    <div className="list">
                        <div className="item">
                            <div className="item_l">
                                <label className="l_la">取号时间</label>
                                <span className="l_sp">{takeNumberData.create_date}</span>
                            </div>
                            <div className="item_r">{takeNumberData.dining_num}</div>
                        </div>
                        <div className="item">
                            <div className="item_l">
                                <label className="l_la">还需等待</label>
                                <span className="l_sp">{takeNumberData.waiting_num}桌</span>
                            </div>
                            <div className="item_r r_font">{takeNumberData.desk_name}</div>
                        </div>
                        <div className="item">
                            <div className="item_l">
                                <label className="l_la">预估时间</label>
                                <span className="l_sp">{takeNumberData.waiting_num>0?(takeNumberData.waiting_num>=30?"<30":takeNumberData.waiting_num):"--"}分钟</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_l">
                                <label className="l_la">已等待</label>
                                <span className="l_sp">{takeNumberData.already_date>=30?"<30":takeNumberData.already_date}分钟</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <img src={Dw} alt="地址" className="address_img" />
                    <span className="address_a">{takeNumberData.address}</span>
                </div>
                <div className="base_bt">
                    <span onClick={takeNumberData.queue_status>0?this.hasCancel.bind(this):null}>{takeNumberData.queue_status>0?"取消排队":"已取消"}</span>
                </div>
                {hasCancel && <PopupWindows hasCancel={this.hasCancel.bind(this)} canteenCancel={this.canteenCancel.bind(this)} />}
            </div>
        )
    }
}

export default TakeNumberDetails;