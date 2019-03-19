// 我的下单菜单-列表
import React, { Component } from 'react';
import "./menuList.scss";

import FoodImg from "../../../assets/images/tem/kafei.png";

class MenuList extends Component{
     //构造方法,初始化
     constructor(props) {
        super(props);
        this.state = {
            menuList:[ //商城订单列表
                {
                    food_img:FoodImg,
                    food_name:"黑椒厚切嫩牛排",
                    price:"59.00",
                    original_price:"78.00",
                    quantity:"3",
                    has_coupon:1,
                },
                {
                    food_img:FoodImg,
                    food_name:"黑椒厚切嫩牛排",
                    price:"59.00",
                    original_price:"78.00",
                    quantity:"3",
                    has_coupon:1,
                },
                {
                    food_img:FoodImg,
                    food_name:"黑椒厚切嫩牛排",
                    price:"59.00",
                    original_price:"78.00",
                    quantity:"3",
                    has_coupon:1,
                },
                {
                    food_img:FoodImg,
                    food_name:"黑椒厚切嫩牛排",
                    price:"59.00",
                    original_price:"78.00",
                    quantity:"3",
                    has_coupon:1,
                }
            ],
        }
    }
    render(){
        let menuList = this.props.MenuList;
        return(
            <div className="menuList">
                {   menuList.map((v,i)=>{
                        return <div className="item" key={i}>
                            <img src={v.good_image} alt="菜品图片" className="item_img" />
                            <div className="item_right">
                                <div className="item_col">
                                    <span>{v.good_name}</span>
                                    <span className="quantity">¥{v.original_price}<label className="bt">¥{v.price}</label></span>
                                </div>
                                <div className="item_col">
                                    <span className="quantity">x{v.good_num}</span>
                                    {/* <label className="has">已使用优惠券抵扣</label> */}
                                </div>
                            </div>
                        </div>
                    })

                }
            </div>
        )
    }
}

export default MenuList;