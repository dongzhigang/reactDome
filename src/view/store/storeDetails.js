import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./storeDetails.scss";

import StoreInfo from "../../components/store/storeDetails/storeInfo";
import TakeAnumber from "../../components/store/storeDetails/takeAnumber";
import Base from "../../components/store/storeDetails/base";
import BindPhone from "../../components/store/storeDetails/bindPhone";
import SelectNumber from "../../components/store/storeDetails/selectNumber";

//接口
import {canteenDetail,canteenTake,canteenCancel} from "../../api/store";

class storeDetails extends Component {
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            isDialong:false, //判断是否弹出模态框，true弹出
            isLogin:true,//判断是否登录，true登录
            selectNum:0,        //选择人数            
            storeDetailsData:{
                canteen_id:"",               //餐厅id
                canteen_name:"",            //餐厅名称
                canteen_logo:"",              //餐厅图片
                comment_score:0,            //评分
                tag_dosc:"",            //标签描述
                address:"",                 //地址
                canteen_distance:"--",        //餐厅距离
                canteen_status:"",          //餐厅状态 1正常取号 2暂停取号
                phone:"",                   //联系电话
                business_hours:"--",               //营业时间
                queue_status:"",             //排队状态 1已经取号 2未取号 (判断是否能取号)
                queue_rule:"",              //取号说明
                queue_desk:{
                    order_name:"A1",           //单号
                    waiting_num:10,          //等待桌数
                    waiting_time:"60",         //等待时间
                    queue_id:""              //排号id
                },
                canteen_desk:[
                    {
                        desk_name:"--",        //桌名
                        desk_num:"--",       //就餐人数
                        waiting_num:0,      //等待桌数
                        waiting_time:"--"      //等待时间
                    },
                    {
                        desk_name:"--",        //桌名
                        desk_num:"--",       //就餐人数
                        waiting_num:0,      //等待桌数
                        waiting_time:"--"      //等待时间
                    },
                    {
                        desk_name:"--",        //桌名
                        desk_num:"--",       //就餐人数
                        waiting_num:0,      //等待桌数
                        waiting_time:"--"      //等待时间
                    },
                    {
                        desk_name:"--",        //桌名
                        desk_num:"--",       //就餐人数
                        waiting_num:0,      //等待桌数
                        waiting_time:"--"      //等待时间
                    },
                ]
            }
        }
    }
    // 父组件声明自己支持 context
    static childContextTypes = {
        takeShow:PropTypes.func,
        canteenTake:PropTypes.func,
        canteenCancel:PropTypes.func,
    }
    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            takeShow:this.takeShow.bind(this),
            canteenTake:this.canteenTake.bind(this),
            canteenCancel:this.canteenCancel.bind(this),
        }
    }
    //立即取号显示隐藏
    takeShow(){
        this.setState({
            isDialong:!this.state.isDialong,
        })
    }
    //取号排队
    canteenTake(num){
        this.setState({
            isDialong:!this.state.isDialong,
        },()=>{
            let data = {
                canteen_id:this.state.storeDetailsData.canteen_id,
                desk_num:num
            }
            canteenTake(data).then((res)=>{
                if(res.data.code === 200){
                    this.props.history.push({pathname:"/takeNumberDetails/" + res.data.queue_id});
                }
            })
        })
    }
    //取消排队
    canteenCancel(){      
        let data = {
            queue_id:this.state.storeDetailsData.take_number.queue_id
        }
        canteenCancel(data).then((res)=>{
            if(res.data.code === 200){
                this.canteenDetail()
            }
        })
    }
    //餐厅数据
    canteenDetail(){
        let data = {
            canteen_id:this.props.match.params.canteen_id,
            lng_lat:this.props.match.params.lng_lat
        }
        canteenDetail(data).then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    storeDetailsData:res.data.data
                })
            }
        })
    }

    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.canteenDetail()
        document.title = '餐厅详情';
    }
    render() {
        let isDialong = this.state.isDialong;
        let isLogin = this.state.isLogin;
        let storeDetailsData = this.state.storeDetailsData;
        return(
            <div className="storeDetails">
                <StoreInfo storeValue={storeDetailsData} />
                <TakeAnumber storeValue={storeDetailsData}/>
                <Base data = {storeDetailsData} />
                {  isDialong &&
                    <div className="dialong">
                        { isLogin?<SelectNumber />
                            :<BindPhone />
                        }
                    </div>  
                }
            </div>
        )
    }
}

export default storeDetails;