// 我的下单菜单-头部
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./menuTop.scss";

class MenuTop extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            totalPrice:0,   //全部价格
            foodLeng:0,     //点菜数量
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        let totalPrice = 0,foodLeng = 0;   //全部价格
        nextProps.MenuTop.forEach((v,i) => {
            totalPrice = parseFloat(totalPrice) + parseFloat(v.price)*v.good_num;
            foodLeng = foodLeng + v.good_num;
        });
        this.setState({
            totalPrice:totalPrice.toFixed(2),
            table_no:nextProps.table_no,
            foodLeng:foodLeng,
            canteen_id:nextProps.canteen_id,
        })
    }
    render(){
        let totalPrice = this.state.totalPrice;
        let table_no = this.state.table_no;
        let canteen_id = this.state.canteen_id;
        let foodLeng = this.state.foodLeng;
        return(
            <div className="menuTop">
                <div className="top_col">
                    <span className="col_a">我在<label className="tableNumber">{table_no}</label>桌</span>
                    <Link to={`../../takingOrder/${canteen_id}/${table_no}`} className="add">+加菜</Link>
                </div>
                <div className="top_col">
                    <span className="bt">共:<label className="quantity">{foodLeng}</label>道菜</span>
                    <div className="rigth">
                        <span>合计  ¥<label className="price">{totalPrice}</label></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuTop;