import React, { Component } from 'react';
import Starddd from "../../../assets/images/icon/starddd.png";
import Star from "../../../assets/images/icon/star.png";
import "./item_right.scss";

class ItemRight extends Component {
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            grades:[0,1,2,3,4],
            obj:props.item,
        }
    }
    render() {
        let grades = this.state.grades;
        let obj = this.state.obj;
        return(
            <div className="store_right">
                <div className="item_info">
                    <div className="title">
                        <span className="title_a">{obj.canteen_name}</span>
                        <span className="title_b">{obj.canteen_distance}</span>
                    </div>
                    <div className="grades">
                        <div className="ggrade_a">
                        { grades.map(function(val){
                            return(
                                <img key={val} src={val < obj.comment_score?Starddd:Star} alt="评价" className="icon" />                       
                            )
                        })}
                        </div>
                        {obj.canteen_status === 2 &&
                            <div className="grade_b">休息中</div>
                        }
                    </div>
                    <div className="docs">{obj.tag_dosc}</div>
                </div>
                <div className="right_base">
                    <div className="base_left">
                        <span className="base_a">排队</span>
                        <span className="base_b">前方正在等待</span>
                    </div>
                    <div className="base_right">
                        <span className="right_a">{obj.waiting_tables}</span>
                        <span className="right_b">桌</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemRight;