import request from '../http'

export const getTest = (params: {}) => {
	return request({
		url: '/test/sdc',
		method: 'GET',
		params
	})
}