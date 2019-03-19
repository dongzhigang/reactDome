import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./queueUp.scss";

class QueueUp extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            storeData:props.storeData,
            takeChil:props.takeNumber,
        }
    }
    // 子组件声明自己需要使用 context
    static contextTypes = {
        takeShow:PropTypes.func,
        canteenCancel:PropTypes.func,
    }
    //立即取号显示隐藏
    takeShow(){       
        this.context.takeShow();
    }
    //取消排队
    canteenCancel(){   
        this.context.canteenCancel();   
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            storeData: nextProps.storeData,
        })
    }
    render() {
        let storeData = this.state.storeData;
        let waiting_time = storeData.take_number.waiting_time;
            waiting_time = waiting_time>0?(waiting_time>=30?"<30分钟":"约"+waiting_time+"分钟"):"约--分钟";
        return(
            <div className="take_below">
                <div className="below_01">
                    {storeData.queue_status===1?
                        <div className="below_01_left2">
                            <span className="left2_item">
                                <label>单号</label>
                                <label className="item_b">{storeData.take_number.dining_num}</label>
                            </span>
                            <span className="left2_item">
                                <label>还需等待</label>
                                <label className="label_a"><b className="item_b">{storeData.take_number.waiting_num}</b>桌</label>
                            </span>
                            <span className="left2_item">
                                <label>预估等待</label>
                                <label className="label_a">{waiting_time}</label>
                            </span>
                        </div>
                        :
                        <div className="below_01_left">
                            <span className="left_box">
                                <label>当前距离</label>
                                <label className="left_b">{storeData.canteen_distance}</label>
                            </span>
                        </div>
                    }
                    {storeData.queue_status !== null &&
                        <div className="below_01_right" onClick={storeData.queue_status===1?this.canteenCancel.bind(this):this.takeShow.bind(this)}>{storeData.queue_status===1?"取消排队":"立即取号"}</div>
                    }
                   
                </div>
                {storeData.canteen_hint !== null && 
                    <div className="below_02">{storeData.canteen_hint}</div>
                }
            </div>
        )
    }
}

export default QueueUp;