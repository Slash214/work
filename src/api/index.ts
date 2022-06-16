const prdURL = 'https://www.lovehaha.cn/api'
const mockURL = 'https://www.fastmock.site/mock/ad6546ec6973c684608e11227e797c5e/api'
const devURL = ''

import request from './http'
export function userLogin(data: { username: string, password: string }): any {
	return request({
		method: 'POST',
		url: `${prdURL}/user/login`,
		data
	})
}

export function getSchoolList(): any {
	return request({
		method: 'GET',
		url: `${mockURL}/mock/school`,
	})
}

export function getMessage(): any {
	return request({
		method: 'GET',
		url: `${mockURL}/mock/news`,
	})
}

export function getHomeLand(): any {
	return request({
		method: 'GET',
		url: `${mockURL}/mock/homeland`
	})
}