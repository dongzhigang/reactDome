import React, { Component } from 'react';
import "./userInfo.scss";
import userInfoBg from "../../../assets/images/icon/beijing.png";

class UserInfo extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {          
        }
    }
    render() {
        let userInfo = this.props.userInfo;
        return(
            <div className="userInfo">
                <img src={userInfoBg} alt="背景" className="userInfo_bg" />
                <div className="userComtent">
                    <div className="user_box">
                         <div className="userName">
                            <img src={userInfo.user_logo} alt="头像" className="portrait" />
                            <span className="name">{userInfo.user_name?userInfo.user_name:'点击登录'}</span>
                         </div>
                         <div className="integralRows">
                            <div className="col">
                                <span>{userInfo.usable_integral}</span>
                                <span className="col_ys">可用积分</span>
                            </div>
                            <div className="col">
                                <span>{userInfo.accumulative_integral}</span>
                                <span className="col_ys">累计积分</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserInfo;