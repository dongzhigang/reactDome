//取号详情-弹窗
import React, { Component } from 'react';
import "./popupWindows.scss";

class PopupWindows extends Component{
     //构造方法,初始化
     constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="popupWindows">
                <div className="box">
                    <div className="box_docs">取消后您的排队信息无法恢复,请您谨慎选择</div>
                    <div className="bt">
                        <span className="bt_a" onClick={this.props.hasCancel.bind(this)}>再想想</span>
                        <span className="bt_a bt_cr" onClick={this.props.canteenCancel.bind(this)}>确认取消</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopupWindows;