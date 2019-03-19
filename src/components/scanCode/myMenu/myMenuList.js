// 我的菜单-菜品列表
import React, { Component } from 'react';
import "./myMenuList.scss";

class FoodList extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            dataList: {//菜品列表
                amount:"10",
                add_food_mrnu:[
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    }
                ],
                food_mrnu:[
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                    {
                        food_name:"黑椒厚切嫩牛排",
                        price:"59.00",
                        quantity:"3"
                    },
                ]
            },
            
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            dataList:nextProps.orderData,
        })
    }
    render(){
        let dataList = this.props.orderData;
        return(
            <div className="myMenuList">
                <div className="title">我的菜单,共条{(dataList.order_list_add && dataList.order_list_add.length) + (dataList.order_list && dataList.order_list.length)}点菜记录</div>
                <div className="list">
                    {/* 加菜 */}
                    {   (dataList.order_list_add && dataList.order_list_add.length)>0 && 
                        <div className="add_foodList">
                            <div className="add_title">加菜</div>
                            <table className="table" border="0">
                                <tbody>
                                    <tr className="tr_title"><th>商品</th><th>价格</th><th>数量</th></tr>
                                    {dataList.order_list_add && dataList.order_list_add.map((v,i)=>{
                                            return <tr className="tr_food" key={i}><td>{v.good_name}</td><td>¥{v.price}</td><td>x{v.good_num}</td></tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    <div className="news_foodList">
                        <table className="table table_mr" border="0">
                            <tbody>
                                <tr className="tr_title"><th>商品</th><th>价格</th><th>数量</th></tr>
                                { dataList.order_list &&  dataList.order_list.map((v,i)=>{
                                        return <tr className="tr_food tr_cor" key={i}><td>{v.good_name}</td><td>¥{v.price}</td><td>x{v.good_num}</td></tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodList;