import React, { Component } from 'react';

import phoneIcon from "../../../assets/images/icon/yjjx.png";
import "./item_left.scss";

class ItemLeft extends Component { 
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            crowd_state:props.item.crowd_state,
            canteen_logo:props.item.canteen_logo,
        }
    }
    render() {
        let crowd_state = this.state.crowd_state;
        let canteen_logo = this.state.canteen_logo;
        return(
            <div className="store_left">
                <div className="item_img">
                    <img src={canteen_logo} alt="图片" />
                    {
                        crowd_state === 3 &&
                        <div className="item_fl_img——ab item_fl_img——red">
                            <span className="item_fl_img——rotate">火爆</span>
                        </div>
                    }
                    {
                        crowd_state === 2 &&
                        <div className="item_fl_img——ab item_fl_img——yellow">
                            <span className="item_fl_img——rotate">拥挤</span>
                        </div>
                    }
                    {
                        crowd_state === 1 &&
                        <div  className="item_fl_img——ab item_fl_img——green" >
                            <span className="item_fl_img——rotate">空闲</span>
                        </div>
                    }
                </div>
                <div className="phone_text">
                    <img src={phoneIcon} alt="手机取号" />
                </div>
            </div>
        )
    }
}

export default ItemLeft;