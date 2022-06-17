import { format } from 'date-fns'
/**
 * 时间格式化
 * @param {Date | string } date 时间 可不传
 * @param {string} type 格式类型 default yyyy/MM/dd   
 * @returns {string}
 */
const formatTime = (date: Date, type: string = 'yyyy/MM/dd') => {
	if (!date) return 'params is not null'
    return format(new Date(date), type)
}

/**
 * 获取对象的长度
 * @param {object} obj 
 * @returns {number} length 
 */
const getObjectlength = (obj: {}) => Object.keys(obj).length

export {
	formatTime,
	getObjectlength
}