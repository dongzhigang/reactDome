// 我的积分
import React, { Component } from 'react';
import "./myIntegral.scss";
import UserInfo from "../../components/user/myIntegral/userInfo";
import IntegralList from "../../components/user/myIntegral/integralList";

import Icon from "../../assets/images/icon/x.png";

//接口
import {integrationRule} from "../../api/user";

class MyIntegral extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            regulation:false,
            integrationRule:[], //积分规则   
        }
    }
    //显示
    showRegulation(){
        this.setState({
            regulation:!this.state.regulation
        })
    }
    //积分规则
    integrationRule(){
        integrationRule().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    integrationRule:res.data.data
                })
            }
        })
    }
    // 将要装载，在render之前调用，生命周期
    componentDidMount(){
        this.integrationRule()
        document.title = '我的积分';
    }
    render() {
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        let integrationRule = this.state.integrationRule;
        let regulation = this.state.regulation;
        return(
            <div className="myIntegral">
                <UserInfo userInfo={userInfo} />
                <IntegralList />
                <div className="regulation" onClick={this.showRegulation.bind(this)}>积分规则</div>
                {/* 弹窗规则 */}
                {regulation &&
                    <div className="dialog">
                        <div className="box">
                            <div className="title">积分规则</div>
                            <div className="rows">
                            {   integrationRule.map((v,i)=>{
                                    return  <div className="col" key={i}>{v.rule_name}</div>
                                })
                            }
                            </div>
                            <img src={Icon} alt="删除" className="del"  onClick={this.showRegulation.bind(this)} />
                        </div>
                    </div>

                }
            </div>
        )
    }
}
export default MyIntegral;