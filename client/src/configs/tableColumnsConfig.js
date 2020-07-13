//TODO: 这里直接从tools里导出会出错误, 之后有空寻找错误原因
import {
	type,
	name,
	size,
	count,
	total,
	unit,
	price,
	amount,
	comments,
	weight,
	actions,
} from '../tools/tableColumns/tableColumns'

// () => type({align: 'center'}), // 带有配置参数的表单项写法
/**交易管理, 表格表单的表单项配置 */
export const getTradeColumns = (handleFieldChange, handleDelete) => [
	type(handleFieldChange),
	name(handleFieldChange),
	size(handleFieldChange),
	count(handleFieldChange),
	total(handleFieldChange),
	unit(handleFieldChange),
	price(handleFieldChange),
	amount(handleFieldChange),
	comments(handleFieldChange),
	actions(handleDelete),
]

// 交易管理, 表格表单的表单项初始值
export const tradeColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
	total: 0,
	unit: '',
	price: '',
	amount: '',
	comments: '',
}
/**交易管理, 表格表单的表单项配置 */

/**租赁管理, 表格表单的表单项配置 */
export const getRentColumns = (handleFieldChange, handleDelete) => [
	type(handleFieldChange),
	name(handleFieldChange),
	size(handleFieldChange),
	count(handleFieldChange),
	total(handleFieldChange),
	comments(handleFieldChange),
	actions(handleDelete),
]

// 租赁管理, 表格表单的表单项初始值
export const rentColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
	total: 0,
	comments: '',
}
/**租赁管理, 表格表单的表单项配置 */

/**暂存管理, 表格表单的表单项配置 */
export const getTransferColumns = (handleFieldChange, handleDelete) => [
	type(handleFieldChange),
	name(handleFieldChange),
	size(handleFieldChange),
	count(handleFieldChange),
	total(handleFieldChange),
	unit(handleFieldChange),
	price(handleFieldChange),
	amount(handleFieldChange),
	comments(handleFieldChange),
	actions(handleDelete),
]

// 暂存管理, 表格表单的表单项初始值
export const transferColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
	total: 0,
	unit: '',
	price: '',
	amount: '',
	comments: '',
}
/**暂存管理, 表格表单的表单项配置 */

/**暂存管理, 表格表单的表单项配置 */
export const getStocktakingColumns = (handleFieldChange, handleDelete) => [
	type(handleFieldChange),
	name(handleFieldChange),
	size(handleFieldChange),
	count(handleFieldChange),
	total(handleFieldChange),
	unit(handleFieldChange),
	price(handleFieldChange),
	amount(handleFieldChange),
	comments(handleFieldChange),
	actions(handleDelete),
]

// 暂存管理, 表格表单的表单项初始值
export const stocktakingColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
	total: 0,
	unit: '',
	price: '',
	amount: '',
	comments: '',
}
/**暂存管理, 表格表单的表单项配置 */

export const getWeightColumns = (handleFieldChange, handleDelete) => [
	type(handleFieldChange),
	name(handleFieldChange),
	size(handleFieldChange),
	weight(handleFieldChange),
	comments(handleFieldChange),
	actions(handleDelete),
]

// 交易管理, 表格表单的表单项初始值
export const weightColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	weight: 0,
	comments: '',
}
/**交易管理, 表格表单的表单项配置 */
