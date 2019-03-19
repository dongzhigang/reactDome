import request from '../utils/request'
import qs		from 'qs'
//菜品数据
export function foodData(data) {
	return request({
		url: 'Food/food_data',
		method: 'post',
		data:qs.stringify(data),
	})
}
//保存菜品下单菜单
export function saveOrderFrom(data) {
	return request({
		url: 'Food/save_order_from',
		method: 'post',
		data:qs.stringify(data),
	})
}
//下单菜单详情
export function orderDetails(data) {
	return request({
		url: 'Food/order_details',
		method: 'post',
		data:qs.stringify(data),
	})
}

//支付后的下单菜单
export function payOrder(data) {
	return request({
		url: 'Food/pay_order',
		method: 'post',
		data:qs.stringify(data),
	})
}
//支付后的下单菜单
export function payOrderDetails(data) {
	return request({
		url: 'Food/pay_order_details',
		method: 'post',
		data:qs.stringify(data),
	})
}