/**
 * @description 统一封装的网络请求
 * @params {string} prdURL 正式接口
 * @params {string} mockURL mock接口
 * @params {string} devURL 本地开发接口【无】
 * @author 爱呵呵
 */

import request from './http'
const env = import.meta.env.MODE
let baseURL: string = ''
console.error('env', env)
console.warn('当前开发环境', import.meta.env.MODE)
const map = new Map<string, any>([

	['dev', 'http://127.0.0.1:4523/m1/1157551-0-default'],
	['test','http://192.168.2.1/1157551-0-default'],
	['production', 'https://www.lovehaha.cn/api'],
])
console.log(map.get(env))
if (map.get(env)) baseURL = map.get(env)
else console.error('URL配置错误')

const mockURL = 'https://www.fastmock.site/mock/ad6546ec6973c684608e11227e797c5e/api'
const mock2URL = 'http://192.168.124.33:4523/m1/1157551-0-default'

export class ApiCtl {
	private static GETMethods(url: string, params = {}) {
		return request({ method: 'GET', url, params })
	}
	private static POSTMethods(url: string, data = {}, method: any = 'POST') {
		return request({ method, url, data })
	}
	// 获取学期
	static getTimeSelect() {
		return ApiCtl.POSTMethods(`${mock2URL}/Index/index/module/term/crudType/select/selectFn/getTermList`)
	}
	static login(data: {}) {
		return ApiCtl.POSTMethods(`${mock2URL}/user_Log/login`, data)
	}
	static getrecord(data: {}) {
		return ApiCtl.POSTMethods(`${mock2URL}/Index/index/actionName/V3_6_1/moduleType/1`, data)
	}
	// 获取班级记录归档数据
	static getGradeList(data: {}) {
		return ApiCtl.POSTMethods(`${mock2URL}/Index/index/actionName/ClassAnalysisy/versionCode/v3_6_0`, data)
	}
	// 获取班级，班级下包括学生
	static getGradePerson(data: { msgType: number | string, startTime: string, endTime: string }) {
		return ApiCtl.POSTMethods(`${mock2URL}/Index/index/module/student/crudType/select/selectFn/getSchoolClassStuWriteList`, data)
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
