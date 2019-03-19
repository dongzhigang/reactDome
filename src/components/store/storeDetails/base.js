import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./base.scss";
import DoIcon from "../../../assets/images/icon/icon04.png";
import CommentIcon from "../../../assets/images/icon/icon05.png";

class Base extends Component {
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            data:props.data,
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data,
        })
    }
    render() {
        let time = this.state.data.business_hours;
        let canteen_id = this.state.data.canteen_id;
        return(
            <div className="base_box">
                <div className="base_more">更多信息</div>
                <div className="base_time">
                    <img src={DoIcon} alt="营业时间" className="base_icon1" />
                    <label>营业时间:{time}</label>
                </div>
                <div className="base_comment">
                    <img src={CommentIcon} alt="评论" className="base_icon2" />
                    <Link to={`/storeComment/${canteen_id}`}>我要评价</Link>
                </div>
            </div>
        )
    }
}

export default Base;