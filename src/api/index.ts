const prdURL = 'https://www.lovehaha.cn/api'
const mockURL = 'https://www.fastmock.site/mock/ad6546ec6973c684608e11227e797c5e/api'
const mock2URL = 'http://127.0.0.1:4523/m1/1157551-0-default/apinew.php'
import request from './http'

export class ApiCtl {
	private static GETMethods(url: string, params = {}) {
		return request({ method: 'GET', url, params })
	}
	private static POSTMethods(url: string, data = {}, method: any = 'POST') {
		return request({ method, url, data })
	}
	static getTerm() {
		return ApiCtl.GETMethods(`${mock2URL}/user_Log/login`)
	}
	static login(data: {}) {
		return ApiCtl.POSTMethods(`${mock2URL}/user_Log/login`, data)
	}
	static getrecord(data: {}) {
		return ApiCtl.POSTMethods(`${mock2URL}/Index/index/actionName/V3_6_1/moduleType/1`, data)
	}
}



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

export function login(data: { username: string, password: string }): any {
	return request({
		method: 'POST',
		data,
		url: `${mockURL}/api/login`
	})
}


// export function getTerm(params: {}) {
// 	return request({
// 		method: 'GET',
// 		url: `${mock2URL}/mock/term`,
// 		params
// 	})
// }