/**
 * 计算规格的数值表达
 * @param product
 * @returns {number}
 */
export const getScale = product => {
	return product.isScaled ? product.scale : 1
}

/**
 * name|size 的形式作为键值对
 * @param name
 * @param size
 * @returns {*}
 */
export function makeKeyFromNameSize(name, size) {
	return `${name}|${typeof size === 'undefined' ? '' : size}`
}

/**
 * 返回为数字的total，且传入的参数形式是对象，这个方法理应更经常使用
 */
export const total_ = ({ count, size, name }, products) => {
	const product = products[makeKeyFromNameSize(name, size)]
	if (product) {
		return count * getScale(products[makeKeyFromNameSize(name, size)])
	} else {
		return count
	}
}

/**
 * 最多保留两位，但是移除小数点后面的零
 * @param num
 * @param last 保留几位
 * @returns {string}
 */
export function toFixedWithoutTrailingZero(num, last) {
	const lead = last || 2
	return Number(Number(num).toFixed(lead)).toString()
}