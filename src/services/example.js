import request from '../utils/request';

export function query() {
	return request('/api/users');
}

export function getBannerList() {
	return request('http://39.105.98.45/api/v1/banners/bannerList')
}