/**
 * 时间格式化 （不传参数返回当前时间格式化）
 * @param date 
 * @returns YYYY-MM-DD
 */
const formatTime = (date?: Date | string) => {
  if (!date) return new Date().toISOString().slice(0, 10)
}

const getObjectlength = (obj: {}) => Object.keys(obj).length

export {
	formatTime,
	getObjectlength
}