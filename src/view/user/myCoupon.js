// 我的优惠卷
import React, { Component } from 'react';
import "./myCoupon.scss";

import Unused from "../../components/user/myCoupon/unused";
import HaveBeenUsed from "../../components/user/myCoupon/haveBeenUsed";
import PastDue from "../../components/user/myCoupon/pastDue";

//接口
import {myCoupon} from "../../api/user";

class MyCoupon extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            tapIndex:0,    //切换索引
            is_expend:0,    //0未用，1已用，2失效
            UnusedList:[],  //未使用
            HaveBeenUsedList:[], //已使用
            PastDueList:[]  //已失效
        }
    }
    //切换列表
    tapList(index){
        this.setState({
            tapIndex:index
        })
    }
    //优惠卷列表
    myCoupon(){
        for(let i=0;i<3;i++){
            let data = {
                is_expend:i
            }
            myCoupon(data).then((res)=>{
                if(res.data.code === 200){
                    switch (i){
                        case 0:
                            this.setState({
                                UnusedList:res.data.data
                            })
                            break;
                        case 1:
                            this.setState({
                                HaveBeenUsedList:res.data.data
                            })
                            break;
                        default:
                            this.setState({
                                PastDueList:res.data.data
                            })
                    }
                }
                console.log(res)
            })
        }
    }
    componentWillMount(){      
        document.title = '我的优惠卷';
        this.myCoupon();
    }
    render(){
        let tapIndex = this.state.tapIndex;
        let UnusedList = this.state.UnusedList;
        let HaveBeenUsedList = this.state.HaveBeenUsedList;
        let PastDueList = this.state.PastDueList;
        return(
            <div className="myCoupon">
                <div className="rows">
                    <div className={`col ${tapIndex===0?'active':null}`} onClick={this.tapList.bind(this,0)}>未使用(0张)</div>
                    <div className={`col ${tapIndex===1?'active':null}`} onClick={this.tapList.bind(this,1)}>已使用(0张)</div>
                    <div className={`col ${tapIndex===2?'active':null}`} onClick={this.tapList.bind(this,2)}>已失效(0张)</div>
                </div>
                {   tapIndex === 0 && 
                    <Unused UnusedList={UnusedList} />
                }
                {   tapIndex === 1 && 
                    <HaveBeenUsed HaveBeenUsedList={HaveBeenUsedList} />
                }
                {   tapIndex === 2 && 
                    <PastDue PastDueList={PastDueList} />
                }
            </div>
        )
    }
}

export default MyCoupon;