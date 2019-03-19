import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./selectNumber.scss";

class SelectNumber extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            repastNumber:11,    //就餐人数
            repastIndex:0,      //就餐索引
            selectNum:1,        //选择人数
        }
    }
    // 子组件声明自己需要使用 context
    static contextTypes = {
        takeShow:PropTypes.func,
        canteenTake:PropTypes.func,
    }
    //立即取号显示隐藏
    takeShow(){
        this.context.takeShow();
    }
    //确定就餐人数
    confirm(){
        this.context.canteenTake(this.state.selectNum);
    }
    //查看更多
    lookMore(){
        this.setState({
            repastNumber:27
        })
    }
    //选择就餐人数
    selectRepastNumber(index,num){
        this.setState({
            repastIndex:index,
            selectNum:num
        })
    }
    render() {
        let repastNumber = this.state.repastNumber;
        let repastArr = Array.from(new Array(repastNumber)).map((v,i)=>{return i+1});
        let repastIndex = this.state.repastIndex;
        let that = this;
        return(
            <div className="selectNumber">
                <div className="title">请选择就餐人数</div>
                <div className="list">
                    { repastArr.map(function(v,i){
                        return <div key={v} className="item" onClick={that.selectRepastNumber.bind(that,i,v)}><span className={`${i===repastIndex?"active":null}`}>{v}</span></div>
                    })}
                    {repastNumber<=11 &&
                         <div className="item" onClick={this.lookMore.bind(this)}><span>更多</span></div>
                    }
                </div>
                <div className="base">
                    <span className="cancel" onClick={this.takeShow.bind(this)}>取消</span>
                    <span className="confirm" onClick={this.confirm.bind(this)}>确定</span>
                </div>
            </div>
        )
    }
}

export default SelectNumber;