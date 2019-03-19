// 用餐记录
import React, { Component } from 'react';
import "./dinnerRecord.scss";

//接口
import {dinnerRecord} from "../../api/user";
import {returnFloat} from "../../assets/srcipt/common";

class DinnerRecord extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            dinnerList:[ //用餐记录列表
            ],
            totalSun:0,
        }
    }
    dinnerRecord(){
        let totalSun=0;
        dinnerRecord().then((res)=>{
            if(res.data.code === 200){
                res.data.data.forEach((v)=>{
                    totalSun = parseFloat(returnFloat(totalSun)) + parseFloat(v.dinner_sum);
                })
                this.setState({
                    dinnerList:res.data.data,
                    totalSun:totalSun
                })
            }
        })
    }
    componentWillMount(){      
        document.title = '用餐记录';
        this.dinnerRecord();
    }
    render(){
        let dinnerList = this.state.dinnerList;
        let totalSun = this.state.totalSun;
        return(
            <div className="dinnerRecord">
                <table className="tabel" align="center" border="0" >
                    <tbody>
                    <tr className="tabel_tr"><th>用餐时间</th><th>金额(元)</th><th>买单人</th></tr>
                    {   dinnerList.map((v,i)=>{
                            return  <tr key={i} className="tabel_tr"><td>{v.dinner_date}</td><td>{v.dinner_sum}</td><td>{v.pay_name}</td></tr>
                        })
                    }
                    </tbody>
                </table>
                <div className="total">总计:<span className="sum">¥{totalSun}</span></div>
            </div>
        )
    }
}

export default DinnerRecord;