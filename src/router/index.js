import React, { Component } from 'react';
import {HashRouter,Route} from 'react-router-dom';
const _import = require('./_import_' + process.env.NODE_ENV);
class RouterDome extends Component{   
    render(){
        const routeConfig = [
            { 
                path: '/', //导航
                component: _import('list')
            },
            { 
                path: '/storeList',   //店铺列表
                component: _import('store/storeList')
            },
            { 
                path: '/storeDetails/:canteen_id/:lng_lat', //店铺详情
                component: _import('store/storeDetails')
            },
            { 
                path: '/takeNumberDetails/:queue_id', //取号详情
                component: _import('store/takeNumberDetails')
            },
            { 
                path: '/storeComment/:canteen_id',    //店铺评价
                component: _import('store/storeComment')
            },
            { 
                path: '/storeNav',        //店铺导航
                component: _import('store/storeNav')
            },
            { 
                path: '/storeLook/:card_id',        //查看门店
                component: _import('store/storeLook')
            },
            { 
                path: '/userCenter',        //会员中心
                component: _import('user/userCenter')
            },
            { 
                path: '/myIntegral',        //我的积分
                component: _import('user/myIntegral')
            },
            { 
                path: '/integralDetail',        //积分明细
                component: _import('user/integralDetail')
            },
            { 
                path: '/myCoupon',        //我的优惠卷
                component: _import('user/myCoupon')
            },
            { 
                path: '/dinnerRecord',        //用餐记录
                component: _import('user/dinnerRecord')
            },
            { 
                path: '/personalData',        //用户信息
                component: _import('user/personalData')
            },
            { 
                path: '/shoppingOrder/',        //商城订单
                component: _import('user/shoppingOrder')
            },
            { 
                path: '/shoppingOrderDetails/:coupon_id',        //商城订单
                component: _import('user/shoppingOrderDetails')
            },
            { 
                path: '/cardShopping/',        //卡卷商城
                component: _import('user/cardShopping')
            },
            { 
                path: '/cardShoppingDetails/:card_id',        //卡卷商城-详情
                component: _import('user/cardShoppingDetails')
            },
            { 
                path: '/expenseRecord',        //储值消费记录
                component: _import('user/expenseRecord')
            },
            { 
                path: '/qrCode/:canteen_id/:table_no',        //扫码点餐
                component: _import('scanCode/qrCode')
            },
            { 
                path: '/takingOrder/:canteen_id/:table_no',        //扫码点餐-点菜
                component: _import('scanCode/takingOrder')
            },
            { 
                path: '/myOrderMenu/:canteen_id/:table_no',        //扫码点餐-我的下单菜单
                component: _import('scanCode/myOrderMenu')
            },
            { 
                path: '/myMenu/:canteen_id/:table_no/:order_id',        //扫码点餐-我的菜单
                component: _import('scanCode/myMenu')
            }
            
        ]
        return(
                <HashRouter>
                    <div className="bodyBox">
                    {   routeConfig.map((v,i)=>{
                            return  <Route exact path={v.path} component={v.component} key={i}></Route>
                        })
                    }
                    </div>
                </HashRouter>
        )
    }
}

export default RouterDome;