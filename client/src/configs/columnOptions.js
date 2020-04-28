import { type, name, size, count, total, unit, actions } from '../components'

/**交易管理, 表格表单的表单项配置
 * (ref) => name(ref, {align: 'center'}), // 带有配置参数的表单项写法
 */
export const tradeColumns = [type, name, size, count, actions]

// 交易管理, 表格表单的表单项初始值
export const tradeColumnsInitialValue = {
	type: 'a10',
	name: 'b11',
	size: 'c12',
	count: 1,
}
