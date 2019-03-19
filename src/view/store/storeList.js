import React, { Component } from 'react';
import City from '../../components/store/storeList/city';
import Item from '../../components/store/storeList/item';
import "./storeList.scss";

//接口
import {canteenList} from "../../api/store";

class App extends Component {
	//构造方法
    constructor(props) {
        super(props);
        this.state = {
			page:1,
			rows:4,
			lng_lat:"113.339916,23.141081",	//当前经纬度
            storeListData:[]
        }
    }
	//餐厅列列表
	canteenList(){
		let data = {
			city_id:this.state.city_id,
			lng_lat:this.state.lng_lat,
			page:this.state.page,
			rows:this.state.rows
		}
		canteenList(data).then((res)=>{
			if(res.data.code === 200){
				this.setState({
					storeListData:res.data.data
				})
			}
		})
	}
	//切换餐厅
	tapCanteen(id){
        this.setState({"city_id":id},function () {
			this.canteenList();
		});
	}
	// 将要装载，在render之前调用，生命周期
	componentDidMount(){
		document.title = '餐厅列表';
	}
	render() {
		let storeListData = this.state.storeListData;
		let lng_lat = this.state.lng_lat;
		return (
			<div className="storeBox">
				<City tapCanteen={this.tapCanteen.bind(this)}  />
				<Item data={storeListData} lng_lat={lng_lat}  />
			</div>
		);
	}
}

export default App;
