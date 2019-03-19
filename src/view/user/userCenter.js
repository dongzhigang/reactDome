//会员中心
import React, { Component } from 'react';
import "./userCenter.scss";
import StoreLogo from "../../components/user/userCenter/storeLogo";
import List from "../../components/user/userCenter/list";

//接口
import {userInfo} from "../../api/user";

class UserCenter extends Component{
     //构造方法
     constructor(props) {
        super(props);
        this.state = {
            userInfo:{}            
        }
    }
    //用户信息
    userInfo(){
        userInfo().then((res)=>{
            if(res.data.code === 200){
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.data));
                this.setState({
                    userInfo:res.data.data
                })
            }
        })
    }
    
    // 将要装载，在render之前调用，生命周期
    componentWillMount(){
        this.userInfo()
        document.title = '用户中心';
    }
    render() {
        let userInfo = this.state.userInfo;
        return(
            <div className="userCenter">
                <StoreLogo userCard={userInfo.user_card} />
                <List userName={userInfo.user_name} />
            </div>
        )
    }
}

export default UserCenter;