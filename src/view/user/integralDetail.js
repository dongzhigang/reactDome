//积分明细
import React, { Component } from 'react';
import "./integralDetail.scss";

import Acquire from "../../components/user/integralDetail/acquire";
import Expend from "../../components/user/integralDetail/expend";

//接口
import {integrationAcquire,integrationExpend} from "../../api/user";

class IntegralDetail extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            tapIndex:0,   //索引
            integrationAcquire:[],  //积分获取
            integrationExpend:[],   //积分支出
        }
    }
    //切换列表
    tapList(i){
        this.setState({
            tapIndex:i
        })
    }
    //积分获取
    integrationAcquire(){
        integrationAcquire().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    integrationAcquire:res.data.data
                })
            }
        })
    }
    //积分支出
    integrationExpend(){
        integrationExpend().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    integrationExpend:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentDidMount(){
        this.integrationAcquire()
        this.integrationExpend()
        document.title = '积分详情';
    }
    render() {
        let index = this.state.tapIndex;
        let integrationAcquire = this.state.integrationAcquire;
        let integrationExpend = this.state.integrationExpend;
        return(
            <div className="integralDetail">
                <div className="rows">
                    <div className={`col ${index === 0?"active":null}`} onClick={this.tapList.bind(this,0)}>积分获取</div>
                    <div className={`col ${index === 1?"active":null}`}  onClick={this.tapList.bind(this,1)}>积分支出</div>
                </div>
                {index===0?
                    <Acquire Acquire={integrationAcquire}  />:
                    <Expend Expend={integrationExpend} />
                }
            </div>
        )
    }
}

export default IntegralDetail;