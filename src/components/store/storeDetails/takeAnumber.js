import React, { Component } from 'react';
import "./takeAnumber.scss";
import QueueUp from "./queueUp"
import TimeIcon from "../../../assets/images/icon/icon03.png";

class TakeAnumber extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
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
        let storeData = this.state.storeData;
        return(
            <div className="takeNumber">
                <div className="take_top">
                    <span className="take_top_a">
                        <img src={TimeIcon} alt="取号" className="take_top_icon" />
                        <label>排队取号</label>
                    </span>
                    {   storeData.canteen_status === 1 &&
                        <span className="take_top_b">等待时间仅供参考</span>
                    }
                </div>
                {   storeData.canteen_status === 1 &&
                    <div>
                        <div className="take_list">                
                            { storeData.canteen_type.map((v,i)=>{
                                let waiting_time = v.waiting_time;
                                    waiting_time = waiting_time>0?(waiting_time>=30?"<30分钟":"约"+waiting_time+"分钟"):"约--分钟";
                                return  <div key={i} className="take_itme">
                                            <span className="take_item_a take_item_w">
                                                <label>{v.desk_name}</label>
                                                <label className="base">{v.desk_num}人</label>
                                            </span>
                                            <span className="take_item_b take_item_w">前方<label className="label">{v.waiting_num}</label>桌</span>
                                            <span className="take_item_c take_item_w">{waiting_time}</span>
                                        </div>
                            })}
                        </div>
                        <QueueUp storeData = {storeData} />
                    </div>
                }
                {   storeData.canteen_status === 2 &&
                    <div className="pause">餐厅当前暂停取号</div>
                }
            </div>
        )
    }
}
export default TakeAnumber;