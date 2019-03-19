import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./bindPhone.scss";

class BindPhone extends Component {
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            phone:"",   //手机号
            hasTime:true,   //判断是否可以点击
			time:60,        //验证码时间
        }
    }
    tavl = null
    // 子组件声明自己需要使用 context
    static contextTypes = {
        takeShow:PropTypes.func,
    }
    //立即取号显示隐藏
    takeShow(){
        return () => {
            this.context.takeShow();
        }
    }
    //获取手机号码
    handelChange(e){
        this.setState({
            phone:e.target.value
        })
    }
    //倒计时
    dateTime() {
        let time = 60;
        this.setState({
            hasTime:false
        })
        this.tavl = setInterval(function(){
            time--;
            this.setState({
                time,
            })
            if(time <= 0){
                this.setState({
                    hasTime:true,
                    time:60
                })
                clearInterval(this.tavl);
            }
        }.bind(this),1000);
    }
    //获取手机验证码
    getPhoneCode(){
        //验证手机号码
        let myreg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
        if(!myreg.test(this.state.phone.replace(/(^\s*)|(\s*$)/g, ""))){
            let msg = "手机号码格式不对";
            alert(msg)
            return;
        }
        //获取验证码
        if(this.state.hasTime){
            // 倒计时
            this.dateTime();
            // let data = {
            //     phone:this.state.phone.replace(/(^\s*)|(\s*$)/g, "")
            // }		
        }
    }
    //卸载时调用
    componentWillUnmount(){
        //卸载之前，清除定时器
        clearInterval(this.tavl);
    }
    render() {
        let time = this.state.time
        return(
            <div className="bindPhone">
                <div className="title">绑定手机号</div>
                <div className="list">
                    <div className="item">
                        <input type="text" name="" placeholder="请输入手机号码" className="item_input" onChange={this.handelChange.bind(this)}  />
                        <span className="item_span item_right1" onClick={this.getPhoneCode.bind(this)}>获取验证码</span>
                    </div>
                    <div className="item">
                        <input type="text" name="" placeholder="请输入验证码" className="item_input"  />
                        <span className="item_span item_right2">{time}s</span>
                    </div>
                </div>
                <div className="base">
                    <span className="cancel" onClick={this.takeShow()}>取消</span>
                    <span className="confirm">立即绑定</span>
                </div>
            </div>
        )
    }
}

export default BindPhone;