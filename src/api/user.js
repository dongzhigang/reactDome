import request from '../utils/request'
import qs		from 'qs'
//用户信息
export function userInfo(data) {
	return request({
		url: 'User/user_info',
		method: 'post',
		data:qs.stringify(data),
	})
}
//用户信息保存
export function userInfoPreserve(data) {
	return request({
		url: 'User/user_info_preserve',
		method: 'post',
		data:qs.stringify(data),
	})
}
//积分规则
export function integrationRule(data) {
	return request({
		url: 'User/integration_rule',
		method: 'post',
		data:qs.stringify(data),
	})
}
//积分获取
export function integrationAcquire(data) {
	return request({
		url: 'User/integration_acquire',
		method: 'post',
		data:qs.stringify(data),
	})
}
//积分支出
export function integrationExpend(data) {
	return request({
		url: 'User/integration_expend',
		method: 'post',
		data:qs.stringify(data),
	})
}
//卡卷订单-
export function cardOrder(data) {
	return request({
		url: 'Card/card_order',
		method: 'post',
		data:qs.stringify(data),
	})
}
//卡卷订单-详情
export function cardOrderDetails(data) {
	return request({
		url: 'Card/card_order_details',
		method: 'post',
		data:qs.stringify(data),
	})
}
//卡卷商城
export function cardShopping(data) {
	return request({
		url: 'Card/card_shopping',
		method: 'post',
		data:qs.stringify(data),
	})
}
//卡卷商城-详情
export function cardShoppingDetails(data) {
	return request({
		url: 'Card/card_shopping_details',
		method: 'post',
		data:qs.stringify(data),
	})
}
//我的优惠劵
export function myCoupon(data) {
	return request({
		url: 'Card/my_coupon',
		method: 'post',
		data:qs.stringify(data),
	})
}
//我的优惠劵
export function dinnerRecord(data) {
	return request({
		url: 'User/dinner_record',
		method: 'post',
		data:qs.stringify(data),
	})
}