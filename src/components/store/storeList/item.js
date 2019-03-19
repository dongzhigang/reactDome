import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ItemLeft from "./item_left.js";
import ItemRight from "./item_right.js";
import "./item.scss";

class Item extends Component {
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
        }
    };
    render() {
        let storeListData = this.props.data;
        let lng_lat = this.props.lng_lat;
        return(
            <div className="list">
            {storeListData.map(function(v,i){
                return(
                    <Link to={`/storeDetails/${v.canteen_id}/${lng_lat}`} className="storeList_item" key={v.canteen_id}>
                            <ItemLeft item={v} />
                            <ItemRight item={v} />
                    </Link>
                )
            })

            }
            </div>
        );
    };
}

export default Item;