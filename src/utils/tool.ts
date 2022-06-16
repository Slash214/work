import { format } from 'date-fns'
/**
 * 时间格式化 （不传参数返回当前时间格式化）
 * @param {Date | string } date 时间 可不传
 * @param {string} type 格式类型 default yyyy/MM/dd   
 * @returns {string}
 */
const formatTime = (date: Date, type: string = 'yyyy/MM/dd') => {
    return format(date, type)
}

const getObjectlength = (obj: {}) => Object.keys(obj).length

export {
	formatTime,
	getObjectlength
}