//扫码点餐-点菜
import React, { Component } from 'react';
import "./takingOrder.scss";

import ClassifyList from "../../components/scanCode/takingOrder/classifyList";
import FoodList from "../../components/scanCode/takingOrder/foodList";

import CartImg from "../../assets/images/icon/gwc.png";

//接口
import {foodData,saveOrderFrom} from "../../api/scanCode";

class TakingOrder extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            foodData:[],    //菜品数据
            cartNum:0,      //购物车数量
            totalPrice:0,   //全部价格
            table_no:this.props.match.params.table_no,
            canteen_id:this.props.match.params.canteen_id
        }
    }
    //菜品
    foodData(){
        let data = {
            canteen_id:this.state.canteen_id
        }
        foodData(data).then((res)=>{
            if(res.data.code === 200)
            {
                let cartNum=0,totalPrice=0;
                res.data.data.food_list.forEach((v,i)=>{
                    v.list.forEach((val,j)=>{
                        cartNum+=val.good_num;
                        totalPrice = parseFloat(totalPrice) + parseFloat(val.price)*val.good_num;
                    })
                })
                this.setState({
                    foodData:res.data.data,
                    totalPrice:totalPrice.toFixed(2),
                    cartNum:cartNum,
                })
            }
        })
    }
    //加
    addGood(i,j){
        let cartNum=0,totalPrice=0;
        this.state.foodData.food_list.forEach((v,index)=>{
            if(i===index){
                v.list.forEach((val,k)=>{
                    if(j===k){
                        val.good_num++;
                        totalPrice = parseFloat(this.state.totalPrice) + parseFloat(val.price);
                    }
                })
            }
        })
        this.state.foodData.food_classify.forEach((v,index)=>{
            if(i===index){
                v.gross_num++;
                cartNum = this.state.cartNum + 1;
            }
        })
        this.setState({
            foodData:this.state.foodData,
            totalPrice:totalPrice.toFixed(2),
            cartNum:cartNum,
        })
    }
    //减
    minusGood(i,j){
        let cartNum=0,totalPrice=0;
        this.state.foodData.food_list.forEach((v,index)=>{
            if(i===index){
                v.list.forEach((val,k)=>{
                    if(j===k){
                        val.good_num--;
                        totalPrice = parseFloat(this.state.totalPrice) - parseFloat(val.price);
                    }
                })
            }
        })
        this.state.foodData.food_classify.forEach((v,index)=>{
            if(i===index){
                v.gross_num--;
                cartNum = this.state.cartNum - 1;
            }
        })
        this.setState({
            foodData:this.state.foodData,
            totalPrice:totalPrice.toFixed(2),
            cartNum:cartNum,
        })
    }
    //保存订单
    saveOrderFrom(){
        let food_list = [];
        this.state.foodData.food_list.forEach((v,i)=>{
            v.list.forEach((val,k)=>{
                if(val.good_num > 0){
                    food_list.push(val)
                }
            })
        })
        if(!food_list.length){
            alert("请点菜");    
            return;
        }
        let data = {
            canteen_id:this.state.canteen_id,
            food_list:food_list
        }
        saveOrderFrom(data).then((res)=>{
            if(res.data.code === 200){
                this.props.history.push({pathname:"../../myOrderMenu/" + this.state.canteen_id +"/" + this.state.table_no});
            }
        })
    }
    //生命周期
    componentWillMount(){      
        document.title = '菜品列表';
        this.foodData();
    }
    render(){
        let foodData = this.state.foodData;
        let totalPrice = this.state.totalPrice;
        let cartNum = this.state.cartNum;
        return(
            <div className="takingOrder">
                <ClassifyList  ClassifyList={foodData.food_classify} />
                <FoodList FoodList={foodData.food_list} addGood={this.addGood.bind(this)} minusGood={this.minusGood.bind(this)} />
                <div className="but">
                    <div className="but_box">
                        <div className="left">
                            <div className="left_cart">
                                <img src={CartImg} alt="购物车" className="cart_img" />
                                <div className="quantity">{cartNum}</div>
                            </div>
                            <div className="left_a">
                                <span><label>¥{totalPrice}</label></span>
                                <span>下单至大厅08桌</span>
                            </div>
                        </div>
                        <div onClick={this.saveOrderFrom.bind(this)} className="right">去下单</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TakingOrder;