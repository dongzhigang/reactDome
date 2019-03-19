// 用户信息
import React, { Component } from 'react';
import "./personalData.scss";

import Deta from "../../components/user/personalData/detaBirth";

import VIP from "../../assets/images/icon/icon13.png";
import Next from "../../assets/images/icon/icon14.png";

//接口
import {userInfoPreserve} from "../../api/user";

class PersonalData extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            hasDate:false,
            birthday:"请选择出生日期",
            phone:"",
            user_name:"",
        }
    }
    //显示日期
    showDate(birthday){
        this.setState({
            hasDate:!this.state.hasDate,
        })
        if(typeof birthday === "string"){
            this.setState({
                birthday:birthday
            })
        }
    }
    //获取手机号码
    phoneChangeValue(e){
        this.setState({
            phone:e.target.value
        })
    }
    //获取用户名
    nameChangeValue(e){
        this.setState({
            user_name:e.target.value
        })
    }
    //保存
    userInfoPreserve(){
        let data = {
            user_name:this.state.user_name,
            phone:this.state.phone,
            birthday:this.state.birthday
        }
        userInfoPreserve(data).then((res)=>{
            if(res.data.code === 200){
                let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
                userInfo.user_name = this.state.user_name;
                userInfo.phone = this.state.phone;
                userInfo.birthday = this.state.birthday;
                sessionStorage.setItem("userInfo",JSON.stringify(userInfo));
                alert(res.data.msg)
            }else{
                alert(res.data.msg)
            }
        })
    }
    componentWillMount(){      
        let user_info = JSON.parse(sessionStorage.getItem("userInfo"));
        this.setState({
            phone:user_info.phone,
            user_name:user_info.user_name,
            birthday:user_info.birthday
        })
    }
    render(){
        let hasDate = this.state.hasDate;
        let birthday = this.state.birthday;
        let phone = this.state.phone;
        let user_name = this.state.user_name;
        return(
            <div className="personalData">
                <div className="list">
                    <div className="item">
                        <label className="label">手机</label>
                        <input type="text" name="" value={phone}  className="input" placeholder="请输入手机号码" onChange={this.phoneChangeValue.bind(this)} />
                    </div>
                    <div className="item">
                        <label className="label">姓名</label>
                        <input type="text" name="" value={user_name}  className="input" placeholder="请输入姓名" onChange={this.nameChangeValue.bind(this)} />
                    </div>
                    <div className="item">
                        <label className="label">生日</label>
                        <span  className="span" onClick={this.showDate.bind(this)} >{birthday}</span>
                    </div>
                    <div className="item">
                        <label className="label">会员等级</label>
                        <span className="right">
                            <img alt="VIP" src={VIP} className="vip" />
                            <img alt=">" src={Next} className="next" />
                        </span>
                    </div>
                    <div className="item">
                        <label className="label">会员特权</label>
                        <span className="right">
                            <img alt=">" src={Next} className="next" />
                        </span>
                    </div>
                    <div className="item_but" onClick={this.userInfoPreserve.bind(this)}>确定</div>
                </div>
                {hasDate && 
                     <Deta hasDate = {hasDate} showDate={this.showDate.bind(this)} />
                }
            </div>
        )
    }
}

export default PersonalData;