//TODO: 这里直接从utils里导出会出错误, 之后有空寻找错误原因
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
} from '../utils/tableColumns/tableColumns'

/**交易管理, 表格表单的表单项配置 */
// () => type({align: 'center'}), // 带有配置参数的表单项写法
const tradeColumnsConfig = [
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
]

export const tradeColumns = tradeColumnsConfig.map(func => func())

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