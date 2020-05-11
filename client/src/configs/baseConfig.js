export const APP_NAME = 'AFX'

/**
 * 采购支持客户类型
 */
export const PURCHASING_CLIENT_TYPES = [
	'项目仓库',
	'租赁客户',
	'同行客户',
	'基地仓库',
	'供应商',
]

/**
 * 支持的订单类型
 */
export const RECORD_TYPES = ['购销', '调拨', '暂存', '盘点']

/**
 * 支持的供应商类型
 */
export const VENDOR_TYPE_SET = new Set([
	'基地仓库',
	'同行客户',
	'项目仓库',
	'租赁客户',
	'供应商',
])

/**
 * 支持仓库类型、客户类型
 */
export const TAB2TYPE = [
	'基地仓库',
	'项目仓库',
	'租赁客户',
	'同行客户',
	'供应商',
	'承运商',
]
