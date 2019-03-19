import request from '../utils/request'
import qs		from 'qs'
//餐厅所属城市
export function cityList(data) {
	return request({
		url: 'Canteen/city_list',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅列表
export function canteenList(data) {
	return request({
		url: 'Canteen/canteen_list',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅详情
export function canteenDetail(data) {
	return request({
		url: 'Canteen/canteen_detail',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅取号排队
export function canteenTake(data) {
	return request({
		url: 'Canteen/canteen_take',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅取号详情
export function takeNumberDetails(data) {
	return request({
		url: 'Canteen/take_number_details',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅取消排队
export function canteenCancel(data) {
	return request({
		url: 'Canteen/canteen_cancel',
		method: 'post',
		data:qs.stringify(data),
	})
}
//餐厅评论
export function canteenComment(data) {
	return request({
		url: 'Canteen/canteen_comment',
		method: 'post',
		data:qs.stringify(data),
	})
}
//全部餐厅
export function canteenAll(data) {
	return request({
		url: 'Canteen/canteen_all',
		method: 'post',
		data:qs.stringify(data),
	})
}
//查看优惠卷餐厅
export function storeLook(data) {
	return request({
		url: 'Canteen/store_look',
		method: 'post',
		data:qs.stringify(data),
	})
}
//店铺信息
export function storeInfo(data) {
	return request({
		url: 'Store/store_info',
		method: 'post',
		data:qs.stringify(data),
	})
}