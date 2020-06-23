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
	actions,
} from '../tools/tableColumns/tableColumns'

// () => type({align: 'center'}), // 带有配置参数的表单项写法
/**交易管理, 表格表单的表单项配置 */
// const tradeColumnsConfig = [
// 	type,
// 	name,
// 	size,
// 	count,
// 	total,
// 	unit,
// 	price,
// 	amount,
// 	comments,
// 	actions,
// ]

// export const tradeColumns = tradeColumnsConfig.map(func => func())

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

/**交易管理, 表格表单的表单项配置 */
// const rentColumnsConfig = [type, name, size, count, total, comments, actions]
//
// export const rentColumns = rentColumnsConfig.map(func => func())

// 交易管理, 表格表单的表单项初始值
export const rentColumnsInitialRowValue = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
	total: 0,
	comments: '',
}
/**交易管理, 表格表单的表单项配置 */
