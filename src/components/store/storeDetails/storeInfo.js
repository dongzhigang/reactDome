import React, { Component } from 'react';
import "./storeInfo.scss";
import Starddd from "../../../assets/images/icon/starddd.png";
import Star from "../../../assets/images/icon/star.png";
import Address from "../../../assets/images/icon/dw.png";
import Phone from "../../../assets/images/icon/icon02.png";


class StoreInfo extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            grades:[0,1,2,3,4],
            storeData:props.storeValue,
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            storeData: nextProps.storeValue,
        })
    }
    render() {
        let grades = this.state.grades;
        let storeData = this.state.storeData;
        return(
            <div className="store_info">
                <div className="top">
                    <img src={storeData.canteen_logo} alt="餐厅logo" className="storeLogo" />
                    <div className="store_right">
                        <div className="name">{storeData.canteen_name}</div>
                        <div className="dosc">{storeData.tag_dosc}</div>
                        <div className="grades">
                            <div className="grade">
                            { grades.map(function(val){
                                return(
                                    <img key={val} src={val < storeData.comment_score?Starddd:Star} alt="评价" className="icon" />                       
                                )
                            })}
                            </div>
                            <div className="grade_right">秒排</div>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <div className="left">
                        <img src={Address} alt="地址" className="left_icon" />
                        <span className="left_text">{storeData.address}</span>
                    </div>
                    <a href={"tel:"+storeData.phone} className="right">
                        <img src={Phone} alt="电话" className="right_icon" />
                    </a>
                </div>
            </div>
        )
    }
}
export default StoreInfo;