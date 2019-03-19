import React, { Component } from 'react';
import Tap from "../../../assets/images/icon/jt02.png";
import "./city.scss";
//接口
import {cityList} from "../../../api/store";

class City extends Component {
    constructor(props) {
        super(props)      
        // 正确姿势！！！
        // -------------- 初始化 state --------------
        this.state = {
            hasTapCity:true,
            cityIndex:0,
            city_id:"",
            cityName:"",
            cityArr:[]
        }
    }
    //获得城市列表
    cityList(){
        cityList().then((res)=>{
            if(res.data.code === 200){
                this.setState({
                    cityArr:res.data.data,
                    cityName:res.data.data[0].city_name
                })
                //获取城市列表
                this.props.tapCanteen(res.data.data[0].city_id)
            }
        })
    }
    //显示隐藏城市
    cityShow(){
        this.setState({
            "hasTapCity":!this.state.hasTapCity
        })
    }
    //切换城市
    tapCity(city_id,value,index){
        this.setState({
            "hasTapCity":!this.state.hasTapCity,
            "cityIndex":index,
            "cityName":value,
            'city_id':city_id
        }, function () {
            if(this.props.tapCanteen){
                this.props.tapCanteen(this.state.city_id)
            }
        });

    }
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.cityList();
    }
    render() {
        let cityIndex = this.state.cityIndex;
        let hasTapCity = this.state.hasTapCity;
        let cityArr = this.state.cityArr;
        let cityName = this.state.cityName;
        let that = this
        return(
            <div className="addressBox">
                <div className="address">
                    <div className="left">
                        <span>当前城市：<label>{cityName}</label></span>
                    </div>
                    <div className="right" onClick={this.cityShow.bind(this)}>
                        {
                            hasTapCity?"切换城市"
                            :<div className="right_a">
                                <span>收起</span>
                                <img src={Tap} alt="切换城市" />
                            </div>
                        }
                    </div>
                </div>
                {
                    !hasTapCity&&
                    <div className="addrList">
                        <div className="list">
                            {cityArr.map(function(v,i){
                                return <span key={v.city_name} onClick={that.tapCity.bind(that,v.city_id,v.city_name,i)} className={`item ${i===cityIndex?"active":null}`}>{v.city_name}</span>
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default City;