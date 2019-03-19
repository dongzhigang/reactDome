//扫码点餐-菜品列表
import React, { Component } from 'react';
import "./foodList.scss";

class FoodList extends Component{
    //构造方法,初始化
    constructor(props) {
        super(props);
        this.state = {
            foodList:[],    //菜品列表
        }
    }
    //接收父组件请求数据
    componentWillReceiveProps(nextProps){
        this.setState({
            foodList: nextProps.FoodList,
        })
    }
    render(){
        let foodList = this.state.foodList;
        return(
            <div className="foodList" id="list" >
            {   foodList.map((v,i)=>{
                    return  <div className="food_item" key={i} >
                                <div className="food_title">{v.classify_name}</div>
                                <div className="list">
                                {   v.list.map((val,j)=>{
                                        return  <div className="item" key={j}>
                                                    <img src={val.good_image} alt="菜品图片" className="item_img" />
                                                    <div className="item_right">
                                                        <div className="item_title">{val.good_name}</div>
                                                        <div className="item_price"><span>¥<label>{val.price}</label></span>/{val.good_type}</div>
                                                        <div className="item_original_price">
                                                            <span>原价¥{val.original_price}</span>
                                                            <div className="item_and">
                                                                {val.good_num>0 &&
                                                                    <span className="item_and_w item_and_subtract" onClick={this.props.minusGood.bind(this,i,j)}>-</span>
                                                                }
                                                                {val.good_num>0 &&
                                                                    <label>{val.good_num}</label>
                                                                }
                                                                <span className="item_and_w item_and_add" onClick={this.props.addGood.bind(this,i,j)}>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    })
                                }
                                </div>
                            </div>
                })

            }
            </div>
        )
    }
}

export default FoodList;